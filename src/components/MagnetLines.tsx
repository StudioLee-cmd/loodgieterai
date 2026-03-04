"use client";

import React, { useRef, useEffect } from "react";

interface MagnetLinesProps {
    rows?: number;
    columns?: number;
    containerSize?: string | number;
    lineColor?: string;
    lineWidth?: string;
    lineHeight?: string;
    baseAngle?: number;
    className?: string;
    style?: React.CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
    rows = 9,
    columns = 9,
    containerSize = "80vmin",
    lineColor = "#efefef",
    lineWidth = "1vmin",
    lineHeight = "6vmin",
    baseAngle = -10,
    className = "",
    style = {},
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const items = container.querySelectorAll("span");

        const onPointerMove = (e: PointerEvent) => {
            const pointer = { x: e.clientX, y: e.clientY };

            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const b = pointer.x - centerX;
                const a = pointer.y - centerY;
                const rad = Math.atan2(a, b);
                const deg = (rad * 180) / Math.PI;

                item.style.setProperty("--rotate", `${deg + baseAngle}deg`);
            });
        };

        window.addEventListener("pointermove", onPointerMove);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
        };
    }, [rows, columns, baseAngle]);

    const total = rows * columns;

    return (
        <div
            ref={containerRef}
            className={`grid place-items-center ${className}`}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                width: containerSize,
                height: containerSize,
                ...style,
            }}
        >
            {Array.from({ length: total }).map((_, i) => (
                <span
                    key={i}
                    className="block origin-center pointer-events-none"
                    style={{
                        backgroundColor: lineColor,
                        width: lineWidth,
                        height: lineHeight,
                        transform: "rotate(var(--rotate, 0deg))",
                        willChange: "transform",
                        transition: "transform 0.2s ease-out", // Added smooth transition
                    }}
                />
            ))}
        </div>
    );
};

export default MagnetLines;
