import React, { useEffect, useState } from 'react';
import useFormattedDate from '../Hooks/useFormattedDate';
const RecentlyNewsCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(process.env.REACT_APP_NEWSAPI_PAGEINATION_API)
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_NEWSAPI_PAGEINATION_API)
                const temp = await response.json()
                setData(temp.articles)
            } catch (error) {
                console.log("Data can't be fetched", error);
            }
        }
        fetchData()
    }, [])

    const newsCard = data.map((item, index) => {
        const newDate = useFormattedDate(item.publishedAt)
        return (
            <React.Fragment key={item.source.id + item.source.id + index}>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <div className='flex-shrink-0'>
                        <img className='rounded-lg max-w-xs md:max-w-sm ' width={250} height={200} src={item.urlToImage == null ? 'https://dummyimage.com/250x180' : item.urlToImage} alt="" />
                    </div>
                    <div className='flex-1'>
                        <button className='bg-[#DFF1F0] p-[1px] rounded font-semibold text-[12px] text-[#666666]'>
                            Travel
                        </button>
                        <h5 className="text-gray-900 text-xl title-font font-semibold mb-1">{item.title}</h5>
                        <div className='w-max flex flex-wrap items-center mt-2 gap-5 text-[#777777] text-xs'>
                            <div className='flex items-center justify-center gap-2 border-r border-[#999999] pr-2'>
                                <img className='rounded-full' width={18} height={18} src={item.urlToImage == null ? 'https://dummyimage.com/250x180' : item.urlToImage} alt="" />
                                <p>{item.author}</p>
                            </div>
                            <div className='flex items-center justify-center gap-2 border-r border-[#999999] pr-2'>
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88174 12 0.576515 11.8736 0.351472 11.6485C0.126428 11.4235 0 11.1183 0 10.8L0.00599999 2.4C0.00599999 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#555555" />
                                </svg>
                                <p>{newDate}</p>
                            </div>
                            <div className='flex items-center justify-center gap-2 pr-2'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#555555" />
                                    <path d="M6.60009 3H5.40009V6.2484L7.37589 8.2242L8.22429 7.3758L6.60009 5.7516V3Z" fill="#555555" />
                                </svg>
                                3 Min. To Read
                            </div>
                        </div>
                        <p className="text-sm text-[#555555] font-medium mt-4">{item.description}</p>
                    </div>
                </div>
                {index === 3 && (
                    <div className='flex-col justify-center items-center text-center bg-[#F2F8F7] mt-4 p-6 text-black rounded-md'>
                        <p className='font-sans font-semibold text-xl'>Share Your Knowledge With Our Readers</p>
                        <div className='flex items-center justify-center mt-4 mb-4'>
                            <button className='flex items-center justify-center gap-2 bg-[#DFF1F0] p-2 rounded font-semibold text-[#666666] mt-2 border border-[#00AAA1] '>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.357 0.351803L13.7436 0.738392C14.2763 1.27175 14.1957 2.21726 13.5621 2.85022L5.58982 10.8225L3.00688 11.7673C2.68253 11.8866 2.36671 11.7319 2.3025 11.4233C2.2808 11.3114 2.29101 11.1956 2.33198 11.0892L3.29518 8.48393L11.2452 0.533303C11.8788 -0.0996548 12.8243 -0.180904 13.357 0.352458V0.351803ZM5.24189 1.14464C5.32793 1.14464 5.41314 1.16159 5.49263 1.19451C5.57213 1.22744 5.64436 1.27571 5.70521 1.33655C5.76605 1.3974 5.81432 1.46963 5.84724 1.54913C5.88017 1.62862 5.89712 1.71383 5.89712 1.79987C5.89712 1.88592 5.88017 1.97112 5.84724 2.05062C5.81432 2.13012 5.76605 2.20235 5.70521 2.2632C5.64436 2.32404 5.57213 2.3723 5.49263 2.40523C5.41314 2.43816 5.32793 2.45511 5.24189 2.45511H2.62094C2.27338 2.45511 1.94006 2.59318 1.6943 2.83894C1.44854 3.0847 1.31047 3.41802 1.31047 3.76558V11.6284C1.31047 11.976 1.44854 12.3093 1.6943 12.5551C1.94006 12.8008 2.27338 12.9389 2.62094 12.9389H10.4838C10.8313 12.9389 11.1647 12.8008 11.4104 12.5551C11.6562 12.3093 11.7942 11.976 11.7942 11.6284V9.00747C11.7942 8.83369 11.8633 8.66703 11.9862 8.54414C12.109 8.42126 12.2757 8.35223 12.4495 8.35223C12.6233 8.35223 12.7899 8.42126 12.9128 8.54414C13.0357 8.66703 13.1047 8.83369 13.1047 9.00747V11.6284C13.1047 12.3235 12.8286 12.9902 12.3371 13.4817C11.8455 13.9732 11.1789 14.2494 10.4838 14.2494H2.62094C1.92583 14.2494 1.25918 13.9732 0.767656 13.4817C0.276134 12.9902 0 12.3235 0 11.6284V3.76558C0 3.07046 0.276134 2.40382 0.767656 1.91229C1.25918 1.42077 1.92583 1.14464 2.62094 1.14464H5.24189Z" fill="#00AAA1" />
                                </svg>

                                <span>Write-on Notebook</span>
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    });

    return (
        <div className='pl-2 mt-10'>
            {newsCard}
        </div>
    );
};

export default RecentlyNewsCard;
