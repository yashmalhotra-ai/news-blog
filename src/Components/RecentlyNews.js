import React from 'react';
import RecentlyNewsCard from '../Models/RecentlyNewsCard';
import TopAuthorsCard from '../Models/TopAuthorsCard';
import AdvertisementCard from '../Models/AdvertisementCard';
import CategoriesCard from '../Models/CategoriesCard';
import DailyUpdateCard from '../Models/DailyUpdateCard';
import ImageGrid from '../Models/ImageGrid';
import TagsBtn from '../Models/TagsBtn';

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
                        <h3 className='font-semibold font-sans text-xl mt-20 rounded-sm'>
                            <span className='bg-[#00AAA1] text-white '>Categories</span>
                        </h3>
                        <div className='w-full'>
                            <CategoriesCard />
                        </div>
                        <h3 className='font-semibold font-sans text-xl mt-20 rounded-sm'>
                            <span className='bg-[#00AAA1] text-white '>Today's</span>Update
                        </h3>
                        <div className='w-full'>
                            <DailyUpdateCard />
                        </div>
                        <h3 className='font-semibold font-sans text-xl mt-20 rounded-sm'>
                            <span className='bg-[#00AAA1] text-white '>Instagram</span>Post
                        </h3>
                        <div className='w-full'>
                            <ImageGrid />

                        </div>
                        <h3 className='font-semibold font-sans text-xl mt-20 rounded-sm'>
                            <span className='bg-[#00AAA1] text-white '>Seacrh </span>
                            with Tags
                        </h3>
                        <div className='w-full'>
                            <TagsBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentlyNews;
