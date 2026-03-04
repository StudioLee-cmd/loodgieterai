"use client";
import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BenefitSection from "./BenefitSection";
import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);

    const scrollToTab = (index: number) => {
        if (navRef.current) {
            const navItem = document.getElementById(`nav-item-${index}`);
            if (navItem) {
                const container = navRef.current;
                const itemLeft = navItem.offsetLeft;
                const itemWidth = navItem.offsetWidth;
                const containerWidth = container.offsetWidth;

                const targetScrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);

                container.scrollTo({
                    left: targetScrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        scrollToTab(index);
    };

    const handlePrev = () => {
        const newIndex = activeTab === 0 ? benefits.length - 1 : activeTab - 1;
        setActiveTab(newIndex);
        scrollToTab(newIndex);
    };

    const handleNext = () => {
        const newIndex = activeTab === benefits.length - 1 ? 0 : activeTab + 1;
        setActiveTab(newIndex);
        scrollToTab(newIndex);
    };

    // Swipe Interaction
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null) // otherwise the swipe is fired even when simply clicking
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            handleNext()
        }
        if (isRightSwipe) {
            handlePrev()
        }
    }

    return (
        <div id="features" className="relative pb-20">
            {/* Sticky Grid Tracking Bar (2 rows of 5) */}
            <div className="sticky top-[calc(4rem-280px)] md:top-[-160px] z-40 bg-background/95 border-b border-black/10 dark:border-white/10 backdrop-blur-md transition-all duration-300">
                <div
                    ref={navRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-2 md:px-5 py-2 w-full max-w-7xl mx-auto"
                >
                    {benefits.map((item, index) => (
                        <button
                            key={index}
                            id={`nav-item-${index}`}
                            onClick={() => handleTabClick(index)}
                            className={`
                                relative h-full flex items-center justify-center text-center px-1 py-2 text-[10px] md:text-sm font-medium rounded-lg transition-all duration-300 leading-tight
                                ${activeTab === index
                                    ? item.tier === 'pro'
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : item.tier === 'elite'
                                            ? 'bg-amber-400 text-black shadow-md border border-amber-500'
                                            : 'bg-foreground text-background shadow-md'
                                    : item.tier === 'pro'
                                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50'
                                        : item.tier === 'elite'
                                            ? 'text-amber-700 dark:text-amber-300 bg-amber-50/30 dark:bg-amber-900/30 border border-amber-400 dark:border-amber-500/50 hover:bg-amber-100 dark:hover:bg-amber-900/50'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                                }
                            `}
                        >
                            {/* Shorten "Missed Call Text Back" for the grid label to fit */}
                            {item.title === "Missed Call Text Back" ? "Missed Call" : item.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Sections */}
            <div
                className="max-w-7xl mx-auto min-h-[500px] relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-lg transition-all text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110"
                    aria-label="Previous Benefit"
                >
                    <FiChevronLeft size={24} />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-lg transition-all text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110"
                    aria-label="Next Benefit"
                >
                    <FiChevronRight size={24} />
                </button>

                <div
                    key={activeTab} // Key forces re-render for animation
                    className="flex flex-col justify-center px-4 md:px-20 py-10 md:py-16"
                >
                    <BenefitSection benefit={benefits[activeTab]} imageAtRight={true} />
                </div>
            </div>
        </div>
    )
}

export default Benefits