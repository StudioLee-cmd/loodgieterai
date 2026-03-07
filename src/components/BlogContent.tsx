'use client';

import React from 'react';

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    return (
        <div
            className="
                text-lg leading-relaxed text-gray-800 
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-gray-900
                [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-gray-900
                [&_p]:mb-6 [&_p]:text-gray-700
                [&_strong]:font-bold [&_strong]:text-gray-900
                [&_ul]:mb-8 [&_ul]:pl-6 [&_ul]:list-none
                [&_li]:mb-3 [&_li]:relative [&_li]:pl-6
                [&_li::before]:content-['→'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-blue-600 [&_li::before]:font-bold
                [&_ol]:mb-8 [&_ol]:pl-8 [&_ol]:list-decimal
                [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:pl-6 [&_blockquote]:my-8 [&_blockquote]:bg-slate-50 [&_blockquote]:p-6 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:rounded-lg

                [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors
                [&_a:hover]:text-blue-800

                /* DARK MODE OVERRIDES - THE NUCLEAR OPTION */
                dark:[&_*]:!text-gray-200 
                dark:[&_h2]:!text-white 
                dark:[&_h3]:!text-white 
                dark:[&_strong]:!text-white
                dark:[&_blockquote]:!bg-neutral-800 dark:[&_blockquote]:!text-gray-300 dark:[&_blockquote]:!border-orange-500
                dark:[&_li::before]:!text-orange-500
                dark:[&_a]:!text-orange-500 dark:[&_a:hover]:!text-orange-400
            "
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
