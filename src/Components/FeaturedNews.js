import React from 'react';
import FeatureNewsCard from '../Models/FeatureNewsCard';
import TopNewsCard from '../Models/TopNewsCard';

const FeaturedNews = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-[#F2F8F7]">
            <div className="px-5 py-12 mx-auto">
                <h3 className='font-semibold font-sans text-xl'><span className='bg-[#00AAA1] text-white'>Featured</span> This Month</h3>
                <div className="lg:w-full mx-auto flex flex-col lg:flex-row ">
                    <div className='w-full overflow-y-auto max-h-[550px] lg:w-2/3 custom-scrollbar overflow-x-hidden'>
                        <FeatureNewsCard />
                    </div>

                    <div className=" lg:w-1/3 w-full m-1">
                        <h3 className='font-semibold font-sans text-xl'><span className='bg-[#00AAA1] text-white'>Populer</span> Posted</h3>
                        <TopNewsCard/>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedNews;

