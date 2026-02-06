import React from 'react';
import { IComparisonItem } from '@/data/comparison';

interface Props {
    items: IComparisonItem[];
}

const ComparisonTable: React.FC<Props> = ({ items }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-500">De Oude Manier</h3>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-start pb-4 border-b border-gray-100 last:border-0">
                        <div>
                            <p className="font-semibold text-lg text-gray-700">{item.role}</p>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-400 line-through decoration-red-500 decoration-2">€ {item.cost},-</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComparisonTable;
