
import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';

const GuaranteeSection: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BsShieldCheck size={150} className="text-green-600 dark:text-green-400" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-green-900 dark:text-green-100 mb-6 relative z-10 flex items-center justify-center gap-3">
                    <BsShieldCheck className="text-green-600 dark:text-green-400" />
                    De "Groei-of-Geld-Terug" Garantie
                </h3>

                <p className="text-green-800 dark:text-green-200 font-medium mb-8 max-w-2xl mx-auto relative z-10">
                    Geldig op Level 2, 3 en 4. Omdat wij bij Managed Services investeren in dure softwarelicenties, jouw setup en hardware, werken wij met een kwartaal-commitment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
                    <div className="bg-white/60 dark:bg-black/20 p-6 rounded-xl border border-green-100 dark:border-green-800 backdrop-blur-sm">
                        <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">De Harde Garantie</h4>
                        <p className="text-green-800 dark:text-green-200 text-sm">
                            Wij voeren op dag 1 een nulmeting uit (zichtbaar in je dashboard).
                        </p>
                    </div>

                    <div className="bg-white/60 dark:bg-black/20 p-6 rounded-xl border border-green-100 dark:border-green-800 backdrop-blur-sm">
                        <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Resultaat of Refund</h4>
                        <ul className="text-green-800 dark:text-green-200 text-sm space-y-2 list-disc list-inside">
                            <li><strong>Level 2 & 3:</strong> Geen groei in bereik/AI? Geld terug.</li>
                            <li><strong>Level 3 (Reviews):</strong> Geen toename reviews? Geld terug.</li>
                            <li><strong>Level 4:</strong> KPI's niet behaald? Geld terug.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-green-700 dark:text-green-300 text-sm italic relative z-10 font-medium">
                    "Het risico ligt 100% bij ons. Jij hebt niets te verliezen, behalve je huidige chaos."
                </div>
            </div>
        </div>
    );
};

export default GuaranteeSection;
