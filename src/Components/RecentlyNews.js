import React from 'react';
import RecentlyNewsCard from '../Models/RecentlyNewsCard';
import TopAuthorsCard from '../Models/TopAuthorsCard';
import AdvertisementCard from '../Models/AdvertisementCard';

const RecentlyNews = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="px-5 py-12 mx-auto">
                <h3 className='font-semibold font-sans text-xl'>
                    <span className='bg-[#00AAA1] text-white'>Recently</span> Posted
                </h3>
                <div className="lg:w-full mx-auto flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 lg:pr-5">
                        <RecentlyNewsCard />
                    </div>
                    <div className="lg:w-1/3 w-full m-1">
                        <h3 className='font-semibold font-sans text-xl'>
                            <span className='bg-[#00AAA1] text-white'>Top</span> Authors
                        </h3>
                        <div>
                            <TopAuthorsCard />
                            <TopAuthorsCard />
                            <TopAuthorsCard />
                        </div>
                        <div className='mt-10'>
                            <AdvertisementCard />
                        </div>
                        {/* Add content for Popular Posted section here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentlyNews;
