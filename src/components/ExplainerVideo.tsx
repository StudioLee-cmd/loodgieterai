"use client";

import React, { useEffect, useRef } from "react";
import explainers from "@/data/explainers.json";

// The video place of a service page. It plays the explaining motion graphic of that service (the route it takes,
// step by step); a real video replaces it by overwriting public/videos/uitleg/<slot>.mp4 and .webp under the same name.
type Slot = keyof typeof explainers;

const ExplainerVideo: React.FC<{ slot: Slot }> = ({ slot }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const item = explainers[slot];
  useEffect(() => {
    const video = ref.current;
    if (!video || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      }),
      { rootMargin: "200px" }
    );
    seen.observe(video);
    return () => seen.disconnect();
  }, []);
  return (
    <section className="px-4 pb-12" data-video-slot-box={slot}>
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-2xl bg-[#171717]">
          <video
            ref={ref}
            data-video-slot={slot}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={`/videos/uitleg/${slot}.webp`}
            aria-label={`Uitleg in beeld: ${item.title} ${item.steps.join(" ")}`}
          >
            <source src={`/videos/uitleg/${slot}.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
