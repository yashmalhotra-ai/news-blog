// CategoriesCard.js

import React from 'react';

const CategoriesCard = () => {
    // Example data for the table
    const categoriesData = [
        { category: 'LifeStyle', count: 9 },
        { category: 'Travel', count: 5 },
        { category: 'Food', count: 23 },
        { category: 'HealthCare', count: 4 },
        { category: 'Technology', count: 1 }
    ];

    return (
        <div className="rounded-md font-semibold text-sm mt-5">
            <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                    {categoriesData.map((category, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-200">
                                {category.category}
                            </td>
                            <td className="whitespace-nowrap text-sm text-gray-500 border-b border-gray-200">
                                {category.count}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesCard;
