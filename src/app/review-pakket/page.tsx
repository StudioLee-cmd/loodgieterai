"use client";
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewPricing from "@/components/Review/ReviewPricing";
import MockupGenerator from "@/components/Review/MockupGenerator";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function ReviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
                    >
                        Boost je Online Reputatie
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        Start met het verzamelen van 5-sterren reviews via onze slimme NFC-tools en software.
                        Van stickers op de deur tot een volledig geautomatiseerd dashboard.
                    </motion.p>
                </div>
            </section>

            {/* Mockup Generator Section */}
            <MockupGenerator />

            {/* Pricing Section */}
            <ReviewPricing />

            {/* Upsell / How it Works Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                        HOE HET WERKT
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Van eenmalig product naar <span className="text-blue-600">continu succes</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Na aankoop van je hardware krijg je direct toegang tot de <strong>AI Reclame Studio</strong>.
                        Start met hardware, groei door met software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-xl font-bold mb-2">1. Bestel Pakket</h3>
                            <p className="text-gray-500">Ontvang je NFC bordjes, stickers en tassen binnen 2 werkdagen.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 relative">
                            <div className="absolute hidden md:block top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                            <div className="text-4xl mb-4">📲</div>
                            <h3 className="text-xl font-bold mb-2">2. Installeer & Scan</h3>
                            <p className="text-gray-500">Plaats de materialen. Klanten scannen en laten direct een review achter.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
                            <div className="absolute -top-3 right-8 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">UPGRADE</div>
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2">3. Groei Verder</h3>
                            <p className="text-gray-500">Upgrade naar het maandabonnement voor automatische social posts en meer.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
