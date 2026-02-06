'use client';

import React from 'react';

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    return (
        <>
            <style jsx global>{`
                .blog-content {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #1f2937;
                }
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    color: #111827;
                    line-height: 1.3;
                }
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    color: #1f2937;
                    line-height: 1.4;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                    color: #374151;
                }
                .blog-content strong {
                    color: #111827;
                    font-weight: 600;
                }
                .blog-content ul, .blog-content ol {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.75rem;
                    color: #374151;
                    line-height: 1.7;
                }
                .blog-content ul li {
                    list-style-type: none;
                    position: relative;
                    padding-left: 1.5rem;
                }
                .blog-content ul li:before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #2563eb;
                    font-weight: 600;
                }
                .blog-content ol {
                    counter-reset: item;
                }
                .blog-content ol li {
                    counter-increment: item;
                    list-style-type: none;
                    position: relative;
                    padding-left: 2rem;
                }
                .blog-content ol li:before {
                    content: counter(item) ".";
                    position: absolute;
                    left: 0;
                    color: #2563eb;
                    font-weight: 700;
                    font-size: 1.125rem;
                }
                .blog-content blockquote {
                    border-left: 4px solid #2563eb;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    font-style: italic;
                    color: #475569;
                }
                .blog-content blockquote p {
                    margin-bottom: 0.75rem;
                }
                .blog-content blockquote p:last-child {
                    margin-bottom: 0;
                }
            `}</style>
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </>
    );
}
