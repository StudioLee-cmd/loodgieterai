// Writes src/data/lastmod.json: per article and per static route, the date of the newest commit that changed
// its content, with a digest of that content. src/utils/lastmod.ts reads it for the sitemap <lastmod> and the
// Article dateModified. Content that changed after this file was written no longer matches its digest, so the
// build dates it on the build day instead of keeping the old date. An article's tags: line is taxonomy, not content:
// a tag tidy-up dates no article (Google trusts lastmod only while it marks real changes). Run with full git history:
// npm run lastmod
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

if (git('rev-parse', '--is-shallow-repository') === 'true') {
    console.error('lastmod: this clone is shallow, so commit dates would be wrong; run it in a full clone');
    process.exit(1);
}

function files(target) {
    const full = path.join(ROOT, target);
    if (!fs.existsSync(full)) return [];
    if (fs.statSync(full).isFile()) return [target];
    return fs.readdirSync(full).sort().flatMap((name) => (name.startsWith('.') ? [] : files(path.join(target, name))));
}

// The article as a reader sees it: the file without its frontmatter tags: line (same rule in src/utils/lastmod.ts).
export const content = (text) => text.replace(/^tags:.*\r?\n/m, '');

export function digest(paths) {
    const hash = createHash('sha256');
    for (const file of paths) {
        const raw = fs.readFileSync(path.join(ROOT, file));
        hash.update(file).update('\0').update(file.endsWith('.md') ? content(raw.toString('utf8')) : raw).update('\0');
    }
    return hash.digest('hex').slice(0, 16);
}

function entry(target) {
    const date = git('log', '-1', '--format=%cs', '--', target);
    return date ? { date, digest: digest(files(target)) } : null;
}

// The newest commit that changed the article's content, skipping commits that only touched its tags: line.
function postEntry(target) {
    const at = (rev) => { try { return content(git('show', `${rev}:${target}`)); } catch { return null; } };
    for (const line of git('log', '--format=%H %cs', '--', target).split('\n').filter(Boolean)) {
        const [sha, date] = line.split(' ');
        if (at(sha) !== at(`${sha}^`)) return { date, digest: digest([target]) };
    }
    return null;
}

const out = { posts: {}, routes: {} };
for (const name of fs.readdirSync(path.join(ROOT, 'posts')).sort()) {
    if (!name.endsWith('.md') || name.startsWith('._')) continue;
    const found = postEntry(path.join('posts', name));
    if (found) out.posts[name.replace(/\.md$/, '')] = found;
}
for (const name of fs.readdirSync(path.join(ROOT, 'src/app')).sort()) {
    const dir = path.join('src/app', name);
    if (!fs.statSync(path.join(ROOT, dir)).isDirectory() || name.startsWith('[') || name === 'api' || name === 'blog' || name === 'author') continue;
    const found = entry(dir);
    if (found) out.routes['/' + name] = found;
}
const home = entry('src/app/page.tsx');
if (home) out.routes['/'] = home;

const target = path.join(ROOT, 'src/data/lastmod.json');
fs.writeFileSync(target, JSON.stringify(out, null, 1) + '\n');
console.log(`lastmod: ${Object.keys(out.posts).length} articles, ${Object.keys(out.routes).length} routes -> src/data/lastmod.json`);
