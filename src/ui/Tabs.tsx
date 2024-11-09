"use client";
import React, { useState } from 'react'
import TabsContent from './TabsContent';




function Tabs() {
    const Tabs = [
        { id: 0, name: "Live", },
        { id: 1, name: "All", },
        { id: 2, name: "New", },
        { id: 3, name: "Trending", },
        { id: 4, name: "Sports Media", },
        { id: 5, name: "Movies", },
        { id: 6, name: "YouTube", },
        { id: 7, name: "TikTok", },
        { id: 8, name: "NFL", },
        { id: 9, name: "NBA", },
        { id: 10, name: "Crypo", },
        { id: 11, name: "Swing States", },
        { id: 12, name: "Margins", },
        { id: 13, name: "House", },
    ];
    const [activeTab, setActiveTab] = useState(1);





    return (
        <>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700 w-[80%] mx-auto mt-16">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    {Tabs?.map((items, idx) => {
                        return (
                            <>
                                {items.name === "Live" ?
                                    <li className="me-2 relative" role="presentation" key={idx}>
                                        {items.name === "Live" && <span className='bg-[#1d1d1d33] w-[19px] h-[19px] rounded-[50%] absolute top-[30%] left-[-10px] flex items-center justify-center'> <span className='bg-[#1d1d1d9c] w-[13px] h-[13px] rounded-[50%] ab top-[0%] left-[0px] flex '><span className="bg-[#000] w-[7px] h-[7px] rounded-[50%] absolute top-[6px] left-[6px] "></span> </span> </span>}
                                        <button className={` 
                                            ${items.name === "Live" ? 'ml-2 mr-6 text-[#1D1D1D] font-normal ' : 'text-[#969696] font-light'}  inline-block p-4 font-normal rounded-t-lg`} id={`${idx}`} data-tabs-target={idx} type="button" role="tab" aria-controls={idx} aria-selected="false">{items.name}</button>
                                    </li> :
                                    <li 
                                       onClick={() => setActiveTab(idx)}
                                       className="me-2 relative" role="presentation" key={idx}>
                                        <button className={`
                                            ${activeTab === idx ? ' text-[#1D1D1D] font-[700] ' : 'text-[#969696] font-light'}
                                             inline-block xl:px-3  lg:px-1 lg:text-xs xl:text-sm py-4 font-normal rounded-t-lg`} id={`${idx}`} data-tabs-target={idx} type="button" role="tab" aria-controls={idx} aria-selected="false">{items.name}</button>
                                    </li>
                                }
                            </>
                        )
                    })}
                </ul>
            </div>


            {Tabs?.map((itms,idx)=>{
                return (
                    activeTab === idx && <div><TabsContent/></div>
                )
            })}






        </>
    )
}

export default Tabs
