import React from 'react';
import { BsHeadset, BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const SetupSupport: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 shadow-sm">
            <div className="flex items-start gap-5">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-600/20 hidden sm:flex">
                    <BsHeadset size={32} />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        Hulp nodig bij de installatie?
                    </h3>
                    <p className="text-gray-600 max-w-xl leading-relaxed">
                        Start met een gratis strategiesessie (15 min). We leggen uit hoe je alles <strong>zelf instelt</strong>, of bespreken een volledige <strong>'Done-For-You' setup</strong> op maat.
                    </p>
                </div>
            </div>

            <Link
                href="https://calendly.com/tim-studiolee"
                target="_blank"
                className="flex-shrink-0 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2 group"
            >
                Plan Gratis Setup Call
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
};

export default SetupSupport;
