"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsUpload, BsArrowsMove } from 'react-icons/bs';

const MockupGenerator = () => {
    const [logo, setLogo] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogo(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ontwerp jouw materiaal
                    </h2>
                    <p className="text-xl text-gray-600">
                        Upload je logo en zie direct hoe het eruit komt te zien.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Controls */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">1. Upload je Logo</h3>

                        <div
                            className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileUpload}
                            />
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BsUpload size={24} />
                            </div>
                            <p className="font-semibold text-gray-900">Klik om te uploaden</p>
                            <p className="text-sm text-gray-500 mt-2">PNG, JPG of SVG</p>
                        </div>

                        {logo && (
                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-2">2. Sleep je logo op de kaart</h3>
                                <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl text-sm border border-yellow-200">
                                    💡 Tip: Je kunt het logo in het voorbeeld hiernaast verslepen om de perfecte positie te bepalen.
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Preview Canvas */}
                    <div className="relative mx-auto w-full max-w-md aspect-[3/4] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white ring-1 ring-gray-200">
                        {/* Mock Background - Represents a card or sticker */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8 text-center">

                            {/* Standard Elements that are always there */}
                            <div className="absolute top-8 left-8 right-8 flex justify-between items-center opacity-50">
                                <div className="w-12 h-2 rounded-full bg-gray-400"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                            </div>

                            <div className="mb-8 relative z-0">
                                <h2 className="text-3xl font-black text-gray-800 mb-2">REVIEW ONS</h2>
                                <p className="text-gray-500 font-medium">Scan de QR code</p>
                            </div>

                            {/* QR Code Placeholder */}
                            <div className="w-48 h-48 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center text-white/20">
                                <span className="text-xs">QR CODE</span>
                            </div>

                            {/* User Logo Layer */}
                            {logo ? (
                                <motion.div
                                    drag
                                    dragMomentum={false}
                                    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                                    className="absolute cursor-move z-20 hover:ring-2 ring-indigo-500 rounded-lg p-1"
                                    style={{ touchAction: "none" }}
                                >
                                    <div className="relative group">
                                        <img src={logo} alt="Uploaded logo" className="h-24 object-contain drop-shadow-lg" />
                                        <div className="absolute -top-3 -right-3 bg-indigo-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            <BsArrowsMove size={12} />
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                    <p className="text-gray-400 font-medium bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        Upload logo voor preview
                                    </p>
                                </div>
                            )}

                            {/* Google/Niche Logo */}
                            <div className="absolute bottom-12 flex gap-4 opacity-70 grayscale">
                                <div className="text-2xl font-bold text-gray-600">Google</div>
                                <div className="text-2xl font-bold text-gray-600">★★★★★</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MockupGenerator;
