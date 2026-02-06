"use client";
import React from 'react';
import { FiTrendingUp, FiStar, FiClock } from 'react-icons/fi';
import Container from './Container';
import { motion } from 'framer-motion';

const pillars = [
    {
        title: "De Omzet Generator",
        subtitle: "(Capture)",
        description: "Mis nooit meer een klus van €500+ omdat je bezig was. Voice AI & SMS vangt elke lead, 24/7.",
        icon: <FiTrendingUp size={32} />,
        color: "bg-green-50 text-green-600",
        borderColor: "border-green-100"
    },
    {
        title: "De Reputatie Bouwer",
        subtitle: "(Authority)",
        description: "Rank beter in Google en AI met onze Content AI. Door slimme artikelen en reviews ben je altijd vindbaar voor nieuwe klanten.",
        icon: <FiStar size={32} />,
        color: "bg-green-50 text-green-600",
        borderColor: "border-green-100"
    },
    {
        title: "De Tijd Bespaarder",
        subtitle: "(Admin)",
        description: "Bespaar 10 uur per week én dure fotografen. De AI beantwoordt vragen, voorkomt no-shows en maakt professionele beelden zonder camera.",
        icon: <FiClock size={32} />,
        color: "bg-green-50 text-green-600",
        borderColor: "border-green-100"
    }
];

const USPPillars: React.FC = () => {
    return (
        <section className="py-12 md:py-20 border-b border-gray-100">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`flex flex-col items-start p-6 rounded-2xl border ${pillar.borderColor} ${pillar.color} bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 h-full`}
                        >
                            <div className={`p-3 rounded-xl bg-white shadow-sm mb-4 ${pillar.color.replace('bg-', 'text-')}`}>
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {pillar.title}
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                                {pillar.subtitle}
                            </span>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default USPPillars;
