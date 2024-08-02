import React from 'react';

const DailyUpdateCard = () => {
    const TodayCard = (Post, number) => {
        return (
            <div className='flex gap-12 ml-2'>
                <div className='text-center flex-col items-center justify-center bg-[#F2F8F7] p-8 rounded-lg'>
                    <h2 className='text-2xl text-[#00AAA1] font-semibold'>{number}</h2>
                    <p>{Post}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className='flex gap-12 mt-12 ml-2 justify-center '>
                {TodayCard('New Post', 12)}
                {TodayCard('Total visitors', 480)}
            </div>
            <div className='flex gap-12 mt-12 ml-2 justify-center'>
                {TodayCard('New Subscriber', 29)}
                {TodayCard('Blog Reads', 139)}
            </div>
        </div>
    );
};

export default DailyUpdateCard;
