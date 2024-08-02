import React from 'react';

const ImageGrid = () => {
    const images = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
    ];

    return (
        <div className="h-[80vh] w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2">
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-0 pb-[100%]">
                    <img
                        src={image}
                        alt=''
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
