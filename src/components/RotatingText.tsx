"use client";
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
} from "react";
import { motion, AnimatePresence, Transition, Variant } from "framer-motion";

export interface RotatingTextProps {
    texts: string[];
    transition?: Transition;
    initial?: any;
    animate?: any;
    exit?: any;
    animatePresenceMode?: "sync" | "wait" | "popLayout";
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    loop?: boolean;
    auto?: boolean;
    rotationInterval?: number;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementClassName?: string;
    onNext?: (index: number) => void;
}

export interface RotatingTextRef {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
    (
        {
            texts,
            transition = { type: "spring", damping: 25, stiffness: 300 },
            initial = { y: "100%", opacity: 0 },
            animate = { y: 0, opacity: 1 },
            exit = { y: "-120%", opacity: 0 },
            animatePresenceMode = "wait",
            staggerDuration = 0.05,
            staggerFrom = "first",
            loop = true,
            auto = true,
            rotationInterval = 2000,
            mainClassName,
            splitLevelClassName,
            elementClassName,
            onNext,
        },
        ref
    ) => {
        const [currentTextIndex, setCurrentTextIndex] = useState(0);

        const splitText = useCallback((text: string) => {
            return text.match(/./gu) || []; // Valid unicode split
        }, []);

        const elements = useMemo(() => {
            const currentText = texts[currentTextIndex];
            return splitText(currentText).map((char, index) => ({
                char,
                index,
            }));
        }, [texts, currentTextIndex, splitText]);

        const next = useCallback(() => {
            const nextIndex =
                currentTextIndex === texts.length - 1
                    ? loop
                        ? 0
                        : currentTextIndex
                    : currentTextIndex + 1;
            setCurrentTextIndex(nextIndex);
            onNext?.(nextIndex);
        }, [currentTextIndex, loop, texts.length, onNext]);

        const previous = useCallback(() => {
            const prevIndex =
                currentTextIndex === 0
                    ? loop
                        ? texts.length - 1
                        : currentTextIndex
                    : currentTextIndex - 1;
            setCurrentTextIndex(prevIndex);
            onNext?.(prevIndex);
        }, [currentTextIndex, loop, texts.length, onNext]);

        const jumpTo = useCallback(
            (index: number) => {
                const validIndex = Math.max(0, Math.min(index, texts.length - 1));
                setCurrentTextIndex(validIndex);
                onNext?.(validIndex);
            },
            [texts.length, onNext]
        );

        const reset = useCallback(() => {
            setCurrentTextIndex(0);
            onNext?.(0);
        }, [onNext]);

        useImperativeHandle(
            ref,
            () => ({
                next,
                previous,
                jumpTo,
                reset,
            }),
            [next, previous, jumpTo, reset]
        );

        useEffect(() => {
            if (!auto) return;
            const intervalId = setInterval(next, rotationInterval);
            return () => clearInterval(intervalId);
        }, [next, rotationInterval, auto]);

        return (
            <motion.div
                className={`flex flex-wrap whitespace-nowrap ${mainClassName}`}
                layout
                transition={transition}
            >
                <span className="sr-only">{texts[currentTextIndex]}</span>
                <AnimatePresence mode={animatePresenceMode} initial={false}>
                    {elements.map((element, index) => (
                        <motion.div
                            key={`${currentTextIndex}-${index}`}
                            className={`${splitLevelClassName} inline-block whitespace-pre`}
                        >
                            <motion.span
                                className={`${elementClassName} inline-block`}
                                initial={initial}
                                animate={animate}
                                exit={exit}
                                transition={{
                                    ...transition,
                                    delay:
                                        typeof staggerFrom === "number"
                                            ? staggerDuration * Math.abs(index - staggerFrom)
                                            : staggerFrom === "first"
                                                ? staggerDuration * index
                                                : staggerFrom === "last"
                                                    ? staggerDuration * (elements.length - 1 - index)
                                                    : staggerFrom === "center"
                                                        ? staggerDuration * Math.abs(index - elements.length / 2)
                                                        : staggerFrom === "random"
                                                            ? staggerDuration * Math.random()
                                                            : 0,
                                }}
                            >
                                {element.char}
                            </motion.span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        );
    }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
