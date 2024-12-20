import React from 'react'
import footer_banner from '../assets/images/9072_wide_250x141_2x.jpg'
export default function Footer_banner() {
  return (
    <div className="bg-white p-10">
        <div className="max-w-[100%]">
            <div className='max-w-4xl mx-auto py-5 border border-red-400 z-[100] cursor-pointer'> 
                <img src={footer_banner} alt="" className='w-[100%] h-[200px]' />
            </div>
            </div>
        </div>
  )
}
