import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import recorded from '@/data/lastmod.json';

// The date a page's content last changed, from src/data/lastmod.json (written by scripts/lastmod.mjs from git).
// Content whose digest no longer matches the record changed after it was written: it is dated on the build day.

type Entry = { date: string; digest: string };
const ROOT = process.cwd();
const BUILD_DAY = new Date().toISOString().slice(0, 10);

function files(target: string): string[] {
    const full = path.join(ROOT, target);
    if (!fs.existsSync(full)) return [];
    if (fs.statSync(full).isFile()) return [target];
    return fs.readdirSync(full).sort().flatMap((name) => (name.startsWith('.') ? [] : files(path.join(target, name))));
}

function digest(paths: string[]): string {
    const hash = createHash('sha256');
    for (const file of paths) hash.update(file).update('\0').update(fs.readFileSync(path.join(ROOT, file))).update('\0');
    return hash.digest('hex').slice(0, 16);
}

function dated(entry: Entry | undefined, target: string, floor?: string): string {
    const day = entry && entry.digest === digest(files(target)) ? entry.date : BUILD_DAY;
    return floor && floor > day ? floor : day;
}

/** YYYY-MM-DD the article last changed; never before its publication date. */
export function postModified(slug: string, published: string): string {
    const posts = recorded.posts as Record<string, Entry>;
    return dated(posts[slug], path.join('posts', `${slug}.md`), (published || '').slice(0, 10));
}

/** YYYY-MM-DD the static route's own content (src/app/<route>/) last changed. */
export function routeModified(route: string): string {
    const routes = recorded.routes as Record<string, Entry>;
    return dated(routes[route], route === '/' ? 'src/app/page.tsx' : path.join('src/app', route.replace(/^\//, '')));
}
