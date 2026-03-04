"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FocusText: React.FC = () => {
    const items = [
        "Vind Goud in Buizen 🪙",
        "Draai de Kraan Open 🚰",
        "Geen Lek, Wel Flow 💧",
        "Meer Winst, Minder Stress 📈",
        "Je Agenda Automatisch Vol 📅"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-8 relative flex items-center justify-center overflow-hidden mb-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute text-sm md:text-base font-medium text-muted-foreground/80 tracking-wide uppercase"
                >
                    {items[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default FocusText;
