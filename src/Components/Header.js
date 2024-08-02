import React from 'react'

const Header = () => {
    return (
        <>
            <header className="max-w-full flex flex-col md:flex-row items-center justify-between p-2 md:p-2 bg-[#E8F3F3] font-sans">
                <div className='w-[33.33%] flex flex-wrap gap-3 md:gap-5'>
                    <p className='flex items-center justify-center gap-1 cursor-pointer'>Homepage
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                    <p className='flex items-center justify-center gap-1 cursor-pointer'>About
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                    <p className='flex items-center justify-center gap-1 cursor-pointer'>Categories
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                    <p className='flex items-center justify-center gap-1 cursor-pointer'>Pages
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                </div>

                <div className='w-[33.33%] flex flex-col md:flex-row justify-center items-center mt-2 md:mt-0'>
                    <p className='bg-[#00AAA1] text-white font-semibold text-2xl font-sans'>Note</p>
                    <p className='font-semibold text-base self-end font-sans'>Book</p>
                    <p className='font-semibold text-base  text-green-600 self-end font-sans'>.</p>
                </div>

                <div className='w-[33.33%] flex items-center justify-center flex-wrap gap-2 md:gap-10 mt-2 md:mt-0'>
                    <p><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33332 12.1518C9.27883 12.1518 11.6666 9.65539 11.6666 6.5759C11.6666 3.49642 9.27883 1 6.33332 1C3.38781 1 1 3.49642 1 6.5759C1 9.65539 3.38781 12.1518 6.33332 12.1518Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.0002 13.5456L10.1002 10.5137" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                    <p><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1859 0.320957L12.5386 0.673651C13.0246 1.16025 12.951 2.02285 12.373 2.60032L5.09971 9.87358L2.74324 10.7356C2.44734 10.8444 2.1592 10.7033 2.10062 10.4217C2.08082 10.3196 2.09014 10.214 2.12752 10.1169L3.00627 7.74008L10.2592 0.486544C10.8373 -0.0909173 11.6999 -0.165043 12.1859 0.321555V0.320957ZM4.78229 1.04428C4.86079 1.04428 4.93852 1.05974 5.01105 1.08978C5.08358 1.11982 5.14948 1.16386 5.20499 1.21937C5.2605 1.27488 5.30453 1.34078 5.33457 1.4133C5.36461 1.48583 5.38007 1.56356 5.38007 1.64206C5.38007 1.72057 5.36461 1.7983 5.33457 1.87083C5.30453 1.94335 5.2605 2.00925 5.20499 2.06476C5.14948 2.12027 5.08358 2.16431 5.01105 2.19435C4.93852 2.22439 4.86079 2.23985 4.78229 2.23985H2.39114C2.07406 2.23985 1.76996 2.36581 1.54575 2.59003C1.32153 2.81424 1.19557 3.11834 1.19557 3.43542V10.6089C1.19557 10.9259 1.32153 11.23 1.54575 11.4543C1.76996 11.6785 2.07406 11.8044 2.39114 11.8044H9.56458C9.88166 11.8044 10.1858 11.6785 10.41 11.4543C10.6342 11.23 10.7601 10.9259 10.7601 10.6089V8.21771C10.7601 8.05917 10.8231 7.90712 10.9352 7.79501C11.0473 7.68291 11.1994 7.61993 11.3579 7.61993C11.5165 7.61993 11.6685 7.68291 11.7806 7.79501C11.8927 7.90712 11.9557 8.05917 11.9557 8.21771V10.6089C11.9557 11.243 11.7038 11.8512 11.2554 12.2996C10.8069 12.7481 10.1987 13 9.56458 13H2.39114C1.75697 13 1.14878 12.7481 0.70035 12.2996C0.251923 11.8512 0 11.243 0 10.6089V3.43542C0 2.80125 0.251923 2.19305 0.70035 1.74463C1.14878 1.2962 1.75697 1.04428 2.39114 1.04428H4.78229Z" fill="#222222" />
                    </svg>
                    </p>
                    <p>Contact</p>
                    <p className='flex items-center justify-center gap-1 cursor-pointer'>En
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4L8 1" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                    <div className='flex '>
                        <div className='bg-white rounded-sm '>
                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.85986 1V1.99999" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8599 3L10.3599 3.5L10.8596 3.00022L10.8599 3Z" fill="#00AAA1" />
                                <path d="M10.8599 3L10.3599 3.5" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.8599 7H11.8599" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8599 11L10.3599 10.5L10.8596 10.9998L10.8599 11Z" fill="#00AAA1" />
                                <path d="M10.8599 11L10.3599 10.5" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.85986 13V12" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85992 11L3.35992 10.5L2.86015 10.9998L2.85992 11Z" fill="#00AAA1" />
                                <path d="M2.85992 11L3.35992 10.5" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M0.859924 7H1.85992" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85992 3L3.35992 3.5L2.86015 3.00022L2.85992 3Z" fill="#00AAA1" />
                                <path d="M2.85992 3L3.35992 3.5" stroke="#00AAA1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.85989 10.4284C8.7533 10.4284 10.2884 8.89326 10.2884 6.99984C10.2884 5.10642 8.7533 3.57129 6.85989 3.57129C4.96647 3.57129 3.43134 5.10642 3.43134 6.99984C3.43134 8.89326 4.96647 10.4284 6.85989 10.4284Z" stroke="#00AAA1" stroke-width="1.2" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='bg-[#00AAA1] rounded-sm' > <svg width="20" height="20" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.087 2.89162C9.8794 4.4038 10.1075 7.09391 8.59533 8.88631C7.08316 10.6787 4.39304 10.9068 2.60064 9.39464C2.46246 9.27806 2.33112 9.15334 2.21414 9.01987C3.7311 8.79689 5.14515 8.02792 6.1567 6.82893C7.16825 5.62993 7.68813 4.10659 7.65249 2.57375C7.80376 2.66658 7.94881 2.77504 8.087 2.89162ZM8.77279 2.07874C8.03308 1.45467 7.16662 1.07154 6.27769 0.91295C6.89973 2.64135 6.61254 4.63931 5.34382 6.14313C4.0751 7.64696 2.15403 8.26646 0.345568 7.94434C0.65157 8.79387 1.17513 9.58345 1.91485 10.2075C4.15839 12.1003 7.51542 11.8156 9.40821 9.5721C11.301 7.32856 11.0163 3.97154 8.77279 2.07874Z" fill="white" />
                        </svg></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
