"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedThemeTogglerProps {
    className?: string;
}

export function AnimatedThemeToggler({
    className = "",
}: AnimatedThemeTogglerProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className={`w-10 h-10 rounded-full bg-gray-200 ${className}`}
                aria-label="Toggle theme"
            />
        );
    }

    const isDark = theme === "dark";

    const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const x = event.clientX;
        const y = event.clientY;

        // Calculate the maximum radius needed to cover the entire screen
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        // Check if View Transitions API is supported
        // @ts-ignore - View Transitions API is not yet in TypeScript types
        if (!document.startViewTransition) {
            // Fallback for browsers without View Transitions
            setTheme(isDark ? "light" : "dark");
            return;
        }

        // @ts-ignore
        const transition = document.startViewTransition(() => {
            setTheme(isDark ? "light" : "dark");
        });

        try {
            await transition.ready;

            // Animate with circular clip-path from click position
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 700,
                    easing: "ease-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        } catch (e) {
            // View transition was skipped
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors ${className}`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.svg
                        key="sun"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                        />
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="moon"
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -90 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </motion.svg>
                )}
            </AnimatePresence>
        </button>
    );
}
