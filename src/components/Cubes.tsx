"use client";

import React, { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cubes.css';

interface CubesProps {
    rows?: number;
    columns?: number;
    cubeSize?: number;
    maxAngle?: number;
    radius?: number;
    easing?: string;
    duration?: { enter: number; leave: number };
    cellGap?: number | { row: number; col: number };
    borderStyle?: string;
    faceColor?: string;
    shadow?: boolean | string;
    autoAnimate?: boolean;
    rippleOnClick?: boolean;
    rippleColor?: string;
    rippleSpeed?: number;
}

const Cubes: React.FC<CubesProps> = ({
    rows = 10,
    columns = 10,
    cubeSize,
    maxAngle = 45,
    radius = 3,
    easing = 'power3.out',
    duration = { enter: 0.3, leave: 0.6 },
    cellGap,
    borderStyle = '1px solid #fff',
    faceColor = '#060010',
    shadow = false,
    autoAnimate = true,
    rippleOnClick = true,
    rippleColor = '#fff',
    rippleSpeed = 2
}) => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
    const userActiveRef = useRef(false);
    const simPosRef = useRef({ x: 0, y: 0 });
    const simTargetRef = useRef({ x: 0, y: 0 });
    const simRAFRef = useRef<number | null>(null);

    const colGap = typeof cellGap === 'number' ? `${cellGap}px` : cellGap?.col !== undefined ? `${cellGap.col}px` : '5%';
    const rowGap = typeof cellGap === 'number' ? `${cellGap}px` : cellGap?.row !== undefined ? `${cellGap.row}px` : '5%';

    const enterDur = duration.enter;
    const leaveDur = duration.leave;

    // Responsive grid sizing with calculated cube size
    const [gridDimensions, setGridDimensions] = React.useState({ rows, columns });
    const [calculatedCubeSize, setCalculatedCubeSize] = React.useState<number | undefined>(undefined);

    useEffect(() => {
        const updateGridSize = () => {
            const isMobile = window.innerWidth < 768;
            const viewportWidth = window.innerWidth;

            if (isMobile) {
                // Fewer columns on mobile to fit screen
                const mobileColumns = 8;
                const mobileRows = 6;
                const cubeWidth = Math.floor(viewportWidth / mobileColumns * 0.9);
                setGridDimensions({ rows: mobileRows, columns: mobileColumns });
                setCalculatedCubeSize(cubeWidth);
            } else {
                // Halve columns for desktop to fit viewport (10 instead of 20)
                const desktopColumns = Math.min(columns, 10);
                const desktopCubeSize = Math.floor(viewportWidth / desktopColumns * 0.9);
                setGridDimensions({ rows, columns: desktopColumns });
                setCalculatedCubeSize(desktopCubeSize);
            }
        };

        updateGridSize();
        window.addEventListener('resize', updateGridSize);
        return () => window.removeEventListener('resize', updateGridSize);
    }, [rows, columns]);

    const tiltAt = useCallback(
        (rowCenter: number, colCenter: number) => {
            if (!sceneRef.current) return;
            sceneRef.current.querySelectorAll('.cube').forEach((cube) => {
                const el = cube as HTMLElement;
                const r = +(el.dataset.row || 0);
                const c = +(el.dataset.col || 0);
                const dist = Math.hypot(r - rowCenter, c - colCenter);
                if (dist <= radius) {
                    const pct = 1 - dist / radius;
                    const baseAngle = pct * maxAngle;

                    // Calculate direction from cube to mouse
                    const deltaRow = rowCenter - r;
                    const deltaCol = colCenter - c;

                    // Normalize deltas to get direction
                    const normalizedRow = dist > 0 ? deltaRow / dist : 0;
                    const normalizedCol = dist > 0 ? deltaCol / dist : 0;

                    // Apply directional rotation
                    const rotX = -normalizedRow * baseAngle;
                    const rotY = normalizedCol * baseAngle;

                    gsap.to(el, {
                        duration: enterDur,
                        ease: easing,
                        overwrite: true,
                        rotateX: rotX,
                        rotateY: rotY
                    });
                } else {
                    gsap.to(el, {
                        duration: leaveDur,
                        ease: 'power3.out',
                        overwrite: true,
                        rotateX: 0,
                        rotateY: 0
                    });
                }
            });
        },
        [radius, maxAngle, enterDur, leaveDur, easing]
    );


    // Debug: Log dimensions to help troubleshoot coordinate mapping
    useEffect(() => {
        const logDimensions = () => {
            if (sceneRef.current) {
                const rect = sceneRef.current.getBoundingClientRect();
                console.log('Cubes Grid Dimensions:', {
                    width: rect.width,
                    height: rect.height,
                    left: rect.left,
                    right: rect.right,
                    viewportWidth: window.innerWidth
                });
            }
        };

        logDimensions();
        window.addEventListener('resize', logDimensions);

        return () => window.removeEventListener('resize', logDimensions);
    }, []);

    const onPointerMove = useCallback(
        (e: MouseEvent) => {
            if (!sceneRef.current) return;
            const rect = sceneRef.current.getBoundingClientRect();
            // Safety check for zero dimensions (e.g. if hidden)
            if (rect.width === 0 || rect.height === 0) return;

            userActiveRef.current = true;
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

            const cellW = rect.width / gridDimensions.columns;
            const cellH = rect.height / gridDimensions.rows;
            const colCenter = (e.clientX - rect.left) / cellW;
            const rowCenter = (e.clientY - rect.top) / cellH;

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

            idleTimerRef.current = setTimeout(() => {
                userActiveRef.current = false;
            }, 3000);
        },
        [gridDimensions.rows, gridDimensions.columns, tiltAt]
    );

    const resetAll = useCallback(() => {
        if (!sceneRef.current) return;
        sceneRef.current.querySelectorAll('.cube').forEach((cube) =>
            gsap.to(cube, {
                duration: leaveDur,
                rotateX: 0,
                rotateY: 0,
                ease: 'power3.out'
            })
        );
    }, [leaveDur]);

    const onClick = useCallback(
        (e: MouseEvent) => {
            if (!rippleOnClick || !sceneRef.current) return;
            const rect = sceneRef.current.getBoundingClientRect();
            const cellW = rect.width / gridDimensions.columns;
            const cellH = rect.height / gridDimensions.rows;

            const clientX = e.clientX;
            const clientY = e.clientY;

            const colHit = Math.floor((clientX - rect.left) / cellW);
            const rowHit = Math.floor((clientY - rect.top) / cellH);

            const baseRingDelay = 0.15;
            const baseAnimDur = 0.3;
            const baseHold = 0.6;

            const spreadDelay = baseRingDelay / rippleSpeed;
            const animDuration = baseAnimDur / rippleSpeed;
            const holdTime = baseHold / rippleSpeed;

            const rings: { [key: number]: HTMLElement[] } = {};
            sceneRef.current.querySelectorAll('.cube').forEach((cube) => {
                const el = cube as HTMLElement;
                const r = +(el.dataset.row || 0);
                const c = +(el.dataset.col || 0);
                const dist = Math.hypot(r - rowHit, c - colHit);
                const ring = Math.round(dist);
                if (!rings[ring]) rings[ring] = [];
                rings[ring].push(el);
            });

            Object.keys(rings)
                .map(Number)
                .sort((a, b) => a - b)
                .forEach((ring) => {
                    const delay = ring * spreadDelay;
                    const faces = rings[ring].flatMap((cube) => Array.from(cube.querySelectorAll('.cube-face')));

                    gsap.to(faces, {
                        backgroundColor: rippleColor,
                        duration: animDuration,
                        delay,
                        ease: 'power3.out'
                    });
                    gsap.to(faces, {
                        backgroundColor: faceColor,
                        duration: animDuration,
                        delay: delay + animDuration + holdTime,
                        ease: 'power3.out'
                    });
                });
        },
        [rippleOnClick, gridDimensions.rows, gridDimensions.columns, faceColor, rippleColor, rippleSpeed]
    );

    useEffect(() => {
        if (!autoAnimate || !sceneRef.current) return;
        simPosRef.current = {
            x: Math.random() * gridDimensions.columns,
            y: Math.random() * gridDimensions.rows
        };
        simTargetRef.current = {
            x: Math.random() * gridDimensions.columns,
            y: Math.random() * gridDimensions.rows
        };
        const speed = 0.02;
        const loop = () => {
            if (!userActiveRef.current) {
                const pos = simPosRef.current;
                const tgt = simTargetRef.current;
                pos.x += (tgt.x - pos.x) * speed;
                pos.y += (tgt.y - pos.y) * speed;
                tiltAt(pos.y, pos.x);
                if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
                    simTargetRef.current = {
                        x: Math.random() * gridDimensions.columns,
                        y: Math.random() * gridDimensions.rows
                    };
                }
            }
            simRAFRef.current = requestAnimationFrame(loop);
        };
        simRAFRef.current = requestAnimationFrame(loop);
        return () => {
            if (simRAFRef.current != null) {
                cancelAnimationFrame(simRAFRef.current);
            }
        };
    }, [autoAnimate, gridDimensions.rows, gridDimensions.columns, tiltAt]);

    useEffect(() => {
        const el = sceneRef.current;
        if (!el) return;

        // Attach listeners to window used for pointermove to catch events everywhere
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('click', onClick);

        // Optional: Reset when mouse leaves window
        window.addEventListener('mouseout', (e) => {
            if (!e.relatedTarget) {
                resetAll();
            }
        });

        return () => {
            window.removeEventListener('mousemove', onPointerMove);
            window.removeEventListener('click', onClick);
            // clean up other listeners
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        };
    }, [onPointerMove, resetAll, onClick]);

    const rowArray = Array.from({ length: gridDimensions.rows });
    const colArray = Array.from({ length: gridDimensions.columns });

    // Always use 1fr - CSS will handle containment
    const sceneStyle: React.CSSProperties = {
        gridTemplateColumns: `repeat(${gridDimensions.columns}, 1fr)`,
        gridTemplateRows: `repeat(${gridDimensions.rows}, 1fr)`,
        columnGap: colGap,
        rowGap: rowGap
    };

    const wrapperStyle: React.CSSProperties & { [key: string]: string | number } = {
        '--cube-face-border': borderStyle,
        '--cube-face-bg': faceColor,
        '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
        // Do NOT set explicit width/height here - keep wrapper at full size for mouse tracking
    };

    return (
        <div ref={sceneRef} className="default-animation" style={wrapperStyle}>
            <div className="default-animation--scene" style={sceneStyle}>
                {rowArray.map((_, r) =>
                    colArray.map((__, c) => (
                        <div key={`${r}-${c}`} className="cube" data-row={r} data-col={c}>
                            <div className="cube-face cube-face--top" />
                            <div className="cube-face cube-face--bottom" />
                            <div className="cube-face cube-face--left" />
                            <div className="cube-face cube-face--right" />
                            <div className="cube-face cube-face--front" />
                            <div className="cube-face cube-face--back" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cubes;
