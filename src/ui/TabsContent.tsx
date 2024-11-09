import React from 'react'
import Profile from "../images/user.png"
// import profileImage from "../images/bannerImage.png"
import ButtonIcon from '../images/buttonIcon.png'
import CrypIcon from "../images/TorusKnot.svg"

import Image from 'next/image';
import { RiBarChartLine, RiUpload2Line } from '@remixicon/react';

function TabsContent() {

    const CryptoData = [
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' },
        { id: 0, img: Profile, name: '@jc', heading: 'Will BTC reach $100,000?', tags: '#crypto', labelRight: ' Ends in 2D 21hr 32min', btnText: '54', ProfileNumber: '20,79,438', yes: 'Yes', No: 'No' }

    ]


  return (
    <div className='grid  xs:grid-cols-1 lg:grid-cols-3 lg:gap-x-4 xl:gap-x-16 w-[80%] mx-auto gap-y-16'>
    {CryptoData?.map((items, idx) => {
        return (
            <div className='w-full border-[1px] xl:px-8 xl:py-8 lg:p-4 p-4 rounded-[10px]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-4'>
                        <Image className="w-[40px] h-[40px] rounded-[50%]" src={items.img} alt="" />
                        <div className='text-lg'>
                            {items.name}
                        </div>
                    </div>
                    <div className='text-[#DE7794] text-xs'>
                        {items.labelRight}
                    </div>
                </div>
                <div className='mt-2'>
                    <h3 className='text-lg font-normal'>{items.heading}</h3>
                    <span className="text-sm">{items.tags}</span>
                </div>
                <div className='mt-4'>
                    <div className='grid grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 lg:gap-y-2 gap-x-6'>
                        <div className='flex bg-[#62D597] border-[2px] border-[#00FF47] pl-2 pr-4 py-2 gap-x-4 text-[#fff] justify-between rounded-[8px]'>
                            <div className='flex xl:gap-x-4 lg:gap-x-1'>
                                <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                {items.btnText}
                            </div>
                            <span> {items.yes}</span>
                        </div>

                        <div className='flex bg-[#FF8585] border-[2px] border-[#FF0000] pl-2 pr-4 py-2 gap-x-4 text-[#fff] justify-between rounded-[8px]'>
                            <div className='flex xl:gap-x-4 lg:gap-x-1'>
                                <Image className='w-[20px] h-[20px]' src={ButtonIcon} alt='' />
                                54
                            </div>
                            <span> {items.No}</span>
                        </div>

                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex gap-x-4'>
                        <RiUpload2Line size={20} />
                        <RiBarChartLine size={20} />
                    </div>
                    <div className='flex gap-x-2'>
                        <Image className="w-[25px] h-[25px]" src={CrypIcon} alt='' />
                        <p>{items.ProfileNumber}</p>
                    </div>
                </div>
            </div>
        )
    })}



</div>
  )
}

export default TabsContent
