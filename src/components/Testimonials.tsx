"use client";
import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { FaStar } from 'react-icons/fa';

const Testimonials: React.FC = () => {
    // Duplicate for seamless loop
    const extendedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="w-full overflow-hidden py-10 relative">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 60s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="animate-scroll gap-6 px-6">
                {extendedTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-[350px] md:w-[400px] flex-shrink-0 bg-[var(--card-background)] p-6 rounded-2xl border border-[var(--card-border)] shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`w-4 h-4 ${i < (testimonial.stars || 5) ? 'text-amber-400' : 'text-[var(--foreground-accent)]/30'}`}
                                />
                            ))}
                        </div>

                        <p className="text-[var(--foreground-accent)] italic mb-6 min-h-[80px]">
                            &quot;{testimonial.message}&quot;
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 flex-shrink-0">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fill
                                    className="rounded-full object-cover border border-[var(--card-border)]"
                                    sizes="48px"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--foreground)] text-sm">{testimonial.name}</h4>
                                <p className="text-xs text-[var(--foreground-accent)]">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gradient Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

            {/* Disclaimer */}
            <div className="absolute bottom-2 left-0 w-full text-center text-[10px] text-[var(--foreground-accent)] opacity-70 pointer-events-none">
                * Reviews zijn AI-gegenereerde voorbeelden ter illustratie. Echte ervaringen volgen binnenkort.
            </div>
        </div>
    );
};

export default Testimonials;

