import React from 'react'
import { RiAtLine, RiDiscordFill, RiInstagramLine, RiTiktokFill, RiTwitterXLine } from '@remixicon/react'



function Footer() {
  return (
    <div className='w-full h-auto bg-[#1d1d1d] mt-16 py-24'>
        <div className='grid lg:grid-cols-3 lg:gap-y-0 gird-cols-1 w-[60%] mx-auto gap-y-6'>
           <div className='text-[#fff] '>
              <h3 className='text-xl font-semibold italic mb-2'>Balshi</h3>
              <ul className='flex gap-x-4'>
                 <li><RiTwitterXLine/></li>
                 <li><RiInstagramLine/></li>
                 <li><RiTiktokFill/></li>
                 <li><RiDiscordFill/></li>
                 <li><RiAtLine/></li>
              </ul>
              <p className='pt-16 opacity-[50%] text-sm'>Balshi 2024</p>
           </div>
           <div className='text-[#fff]'>
             <h4>Balshi</h4>
             <ul className='text-sm font-light opacity-[50%]'>
                <li className='py-1'>
                    Terms & Condition
                </li>
                <li>
                    Privacy police
                </li>
             </ul>
           </div>

           <div className='text-[#fff]'>
             <h4>Balshi Creations</h4>
             <ul className='text-sm font-light opacity-[50%]'>
                <li className='py-1'>
                   Marketplace
                </li>
                <li>
                   Affiliate Program
                </li>
             </ul>
           </div>

        </div>
      
    </div>
  )
}

export default Footer
