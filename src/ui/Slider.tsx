"use client";
import React from "react";
import Banner from "react-slick";
import ImageBanner from "../images/bannerImage.png"
import Image from 'next/image'
import ButtonIcon from "../images/buttonIcon.png"
import { RiCircleLine, RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

function Slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <div className="custom-arrow custom-prev-arrow">
                <div className="leftCircle">
                    <RiArrowLeftSLine size={20} />
                    <span className="leftTextArrow">Trump: its ours to lose</span>
                </div>
            </div>
        ),
        nextArrow: (
            <div className="custom-arrow custom-next-arrow">
                <div className="right"> <RiArrowRightSLine size={20} /> </div>
                <span className="rightTextArrow">Trump: its ours to lose</span>
            </div>
        ),
        dotsClass: "slick-dots custom-dots",

    };
    return (
        <div className="ModiFyBannerSLider">
            <Banner {...settings}>
                <div style={{ display: `flex` }}
                    className="wrapperSLider pb-12 items-center justify-center grow mx-auto  px-4 sm:mt-12 sm:px-6  lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div className="sm:text-center lg:text-left">
                        <p className="text-[#DE7794] text-sm mt-8 mb-8 lg:mt-0 lg:mb-8 italic font-light">Ends in 2D 21hr 32min</p>
                        <h1 className="text-[30px] tracking-tight font-semibold text-gray-800 ">
                            <span className="block xl:inline">Who will win the Presendential Election?</span>
                        </h1>
                        <div className="xs:w-[60%] xs:mx-auto xs:text-center lg:flex items-center gap-x-6 mt-4 ">
                            <p>
                                Donald Trump
                            </p>
                            <div className="lg:flex  lg:mt-0 mt-2 grid grid-cols-2 sm:justify-center lg:justify-start gap-x-4 ">
                                <div className='flex bg-[#62D597] border-[2px] border-[#00FF47] pl-2 pr-4 py-2 gap-x-4 text-[#1D1D1D] justify-between rounded-[8px]'>
                                    <div className='flex gap-x-4'>
                                        <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                        54
                                    </div>
                                    <span> Yes</span>
                                </div>
                                <div className='flex bg-[#FF8585] border-[2px] border-[#FF0000] pl-2 pr-4 py-2 gap-x-4 text-[#1D1D1D] justify-between rounded-[8px]'>
                                    <div className='flex gap-x-4'>
                                        <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                        54
                                    </div>
                                    <span> Yes</span>
                                </div>

                            </div>
                        </div>

                        <p
                            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-[17px] lg:mx-0">
                            <span className="font-bold text-[#000]"> Market info: </span>Vice President Kamala Harris secured Vermont, while former President Donald Trump took West Virginia, Kentucky, and Indiana, The New York...
                        </p>

                    </div>
                    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                        <Image
                            src={ImageBanner}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-[20px]"
                        />
                    </div>
                </div>
                <div style={{ display: `flex` }}
                    className="wrapperSLider pb-12 items-center justify-center grow mx-auto  px-4 sm:mt-12 sm:px-6  lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div className="sm:text-center lg:text-left">
                        <p className="text-[#DE7794] text-sm mt-8 mb-8 lg:mt-0 lg:mb-8 italic font-light">Ends in 2D 21hr 32min</p>
                        <h1 className="text-[30px] tracking-tight font-semibold text-gray-800 ">
                            <span className="block xl:inline">Who will win the Presendential Election?</span>
                        </h1>
                        <div className="xs:w-[60%] xs:mx-auto xs:text-center lg:flex items-center gap-x-6 mt-4 ">
                            <p>
                                Donald Trump
                            </p>
                            <div className="lg:flex  lg:mt-0 mt-2 grid grid-cols-2 sm:justify-center lg:justify-start gap-x-4 ">
                                <div className='flex bg-[#62D597] border-[2px] border-[#00FF47] pl-2 pr-4 py-2 gap-x-4 text-[#1D1D1D] justify-between rounded-[8px]'>
                                    <div className='flex gap-x-4'>
                                        <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                        54
                                    </div>
                                    <span> Yes</span>
                                </div>
                                <div className='flex bg-[#FF8585] border-[2px] border-[#FF0000] pl-2 pr-4 py-2 gap-x-4 text-[#1D1D1D] justify-between rounded-[8px]'>
                                    <div className='flex gap-x-4'>
                                        <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                        54
                                    </div>
                                    <span> Yes</span>
                                </div>

                            </div>
                        </div>

                        <p
                            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-[17px] lg:mx-0">
                            <span className="font-bold text-[#000]"> Market info: </span>Vice President Kamala Harris secured Vermont, while former President Donald Trump took West Virginia, Kentucky, and Indiana, The New York...
                        </p>

                    </div>
                    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                        <Image
                            src={ImageBanner}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-[20px]"
                        />
                    </div>
                </div>
                <div style={{ display: `flex` }}
                    className="wrapperSLider pb-12 items-center justify-center grow mx-auto  px-4 sm:mt-12 sm:px-6  lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div className="sm:text-center lg:text-left">
                        <p className="text-[#DE7794] text-sm mt-8 mb-8 lg:mt-0 lg:mb-8 italic font-light">Ends in 2D 21hr 32min</p>
                        <h1 className="text-[30px] tracking-tight font-semibold text-gray-800 ">
                            <span className="block xl:inline">Who will win the Presendential Election?</span>
                        </h1>
                        <div className="xs:w-[60%] xs:mx-auto xs:text-center lg:flex items-center gap-x-6 mt-4 ">
                            <p>
                                Donald Trump
                            </p>
                            <div className="lg:flex  lg:mt-0 mt-2 grid grid-cols-2 sm:justify-center lg:justify-start gap-x-4 ">
                                <div className='flex bg-[#62D597] border-[2px] border-[#00FF47] pl-2 pr-4 py-2 gap-x-4 text-[#1D1D1D] justify-between rounded-[8px]'>
                                    <div className='flex gap-x-4'>
                                        <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                        54
                                    </div>
                                    <span> Yes</span>
                                </div>
                                <div className='flex bg-[#FF8585] border-[2px] border-[#FF0000] pl-2 pr-4 py-2 gap-x-4 text-[#1D1D1D] justify-between rounded-[8px]'>
                                    <div className='flex gap-x-4'>
                                        <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                        54
                                    </div>
                                    <span> Yes</span>
                                </div>

                            </div>
                        </div>

                        <p
                            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-[17px] lg:mx-0">
                            <span className="font-bold text-[#000]"> Market info: </span>Vice President Kamala Harris secured Vermont, while former President Donald Trump took West Virginia, Kentucky, and Indiana, The New York...
                        </p>

                    </div>
                    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                        <Image
                            src={ImageBanner}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-[20px]"
                        />
                    </div>
                </div>

            </Banner>
        </div>
    )
}

export default Slider
