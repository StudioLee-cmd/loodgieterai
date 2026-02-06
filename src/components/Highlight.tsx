import React from 'react';
import clsx from 'clsx';

interface HighlightProps {
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, color = 'primary', className }) => {
    return (
        <span className={clsx(
            "font-caveat inline-block transform -rotate-2 px-1 text-4xl md:text-6xl relative z-10",
            {
                "text-primary": color === 'primary',
                "text-secondary": color === 'secondary',
                "text-foreground-accent": color === 'accent',
            },
            className
        )}>
            {children}
            {/* Optional: Add a subtle underline or shape behind if needed later */}
        </span>
    );
};

export default Highlight;
