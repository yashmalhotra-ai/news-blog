import React from 'react'
import RecentlyNewsCard from '../Models/RecentlyNewsCard'

const RecentlyNews = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-[#F2F8F7]">
            <div className="px-5 py-12 mx-auto">
                <h3 className='font-semibold font-sans text-xl'><span className='bg-[#00AAA1] text-white'>Recently</span>Posted</h3>
                <div className="lg:w-full mx-auto flex flex-col lg:flex-row ">
                <RecentlyNewsCard/>
                    <div className=" lg:w-1/3 w-full m-1">
                        <h3 className='font-semibold font-sans text-xl'><span className='bg-[#00AAA1] text-white'>Populer</span> Posted</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentlyNews
