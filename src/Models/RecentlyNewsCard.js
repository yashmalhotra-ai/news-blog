import React from 'react'

const RecentlyNewsCard = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(data)
    const newsCard = data.map((item, index) => {
        return (
            <div key={index} className='flex gap-2 mt-4'>
                <div>
                    <img className='rounded-lg' src="https://dummyimage.com/250x180" alt="" />

                </div>
                <div>

                    <button className='bg-[#DFF1F0] p-[1px] rounded font-semibold text-[12px] text-[#666666]'>
                        Travel
                    </button>

                    <h5 className="text-gray-900 text-xl title-font font-semibold mb-1">Design is the Mix of emotions</h5>
                    <div className='w-max flex items-center mt-2 gap-5  text-[#777777] text-xs '>
                        <div className='flex items-center justify-center gap-2 border-r border-[#999999] pr-2'>
                            <img className='rounded-full' src="https://dummyimage.com/18x18" alt="" />
                            <p>Author</p>
                        </div>
                        <div className='flex items-center justify-center gap-2 border-r border-[#999999] pr-2'><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88174 12 0.576515 11.8736 0.351472 11.6485C0.126428 11.4235 0 11.1183 0 10.8L0.00599999 2.4C0.00599999 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#555555" />
                        </svg>

                            <p>Date</p>
                        </div>
                        <div className='flex items-center justify-center gap-2  pr-2'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#555555" />
                                <path d="M6.60009 3H5.40009V6.2484L7.37589 8.2242L8.22429 7.3758L6.60009 5.7516V3Z" fill="#555555" />
                            </svg>
                            3 Min. To Read
                        </div>
                    </div>
                <p className=" text-sm  text-[#555555] font-medium mt-4">Did you come here for something in fparticular or just general Riker-bashing? And blowing into maximum warp</p>
                </div>
            </div>
        )
    })
    return (
        <div className='pl-2 mt-10  border border-black' >
            {newsCard}

        </div>
    )
}

export default RecentlyNewsCard
