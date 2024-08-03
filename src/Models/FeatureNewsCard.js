import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useFormattedDate from '../Hooks/useFormattedDate';

const FeatureNewsCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_NEWSAPI_TOPNEWS);
                setData(response.data.articles)

            } catch (error) {
                console.log("can't fetch feature news data", error);
            }
        };
        fetchdata();
    }, []);

    // const data = [1, 2, 3, 4]; // Example data
    const cardGroups = [];
    const groupSize = 2;

    for (let i = 0; i < data.length; i += groupSize) {
        const group = data.slice(i, i + groupSize).map((item, index) => {
            const newDate = useFormattedDate(item.publishedAt);
            const cardContent = (
                <div className='w-[48%]' key={i + index}>
                    <button className='bg-[#DFF1F0] p-[1px] rounded font-semibold text-[12px] text-[#666666]'>
                        Travel
                    </button>
                    <h2 className='font-semibold text-3xl mb-6 mt-2'>{item.title === null ? 'Title' : item.title}</h2>
                    <img alt="news" className="object-cover object-center rounded" width={450} height={250} src={item.urlToImage === null ? "https://dummyimage.com/450x250" : item.urlToImage} />
                    <div className='w-max flex items-center mt-4 gap-5 text-[#777777] text-xs'>
                        <div className='flex items-center justify-center gap-2 border-r border-[#999999] pr-2'>
                            <img className='rounded-full' width={18} height={18} src={item.urlToImage === null ? "https://dummyimage.com/18x18" : item.urlToImage} alt="" />
                            <p>{item.author === null ? 'Author' : item.author}</p>
                        </div>
                        <div className='flex items-center justify-center gap-2 border-r border-[#999999] pr-2'>
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88174 12 0.576515 11.8736 0.351472 11.6485C0.126428 11.4235 0 11.1183 0 10.8L0.00599999 2.4C0.00599999 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#555555" />
                            </svg>
                            <p>{item.publishedAt === null ? 'Date' : newDate}</p>
                        </div>
                        <div className='flex items-center justify-center gap-2 pr-2'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#555555" />
                                <path d="M6.60009 3H5.40009V6.2484L7.37589 8.2242L8.22429 7.3758L6.60009 5.7516V3Z" fill="#555555" />
                            </svg>
                            3 Min. To Read
                        </div>
                    </div>
                    <div className='w-[90%] flex mt-2'>
                        {item.content === null ? 'Content' : item.content}
                    </div>
                </div>
            );

            return cardContent;
        });

        cardGroups.push(
            <div className='flex flex-wrap gap-4' key={i}>
                {group}
            </div>
        );
    }

    return (
        <div>
            {cardGroups}
        </div>
    );
}

export default FeatureNewsCard;
