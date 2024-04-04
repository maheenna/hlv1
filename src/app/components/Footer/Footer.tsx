import Image from 'next/image'
import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import logo from "../../../../public/image/logo.png"

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-blue-500 '>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-[2rem] md:gap-[3rem]'>
        {/* 1st part */}
        <div>
          <div className='flex items-center text-white space-x-2'>

            
          <div className='flex items-center space-x-1'>
               <Image src={logo} alt='logo' className='w-[25px]'/>

                    <h1 className='text-[20px] sm:text-[30px] font-semibold'>HLV</h1>
                </div>
          </div>
          <p className='text-white mt-[0.4rem]  hover:text-blue-100 hover:cursor-pointer'>
            Mediacl Health Solution  
          </p>
          
          
        </div>
        {/* 2nd part  */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[1rem] text-white'>Application</h1>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Home</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>FQA</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Join Wishlist</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>About Us</p>
         
        </div>
        {/* 3rd part */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[1rem] text-white'>Useful Links</h1>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Home</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>About</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>FQA</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Join Waitlist</p>
          
        </div>
        {/* 4th part */}
        

        
        
      </div>
      <p className='text-center text-white text-opacity-50 mt-[1.5rem] '>
      HLV © 2024 <span className='text-black'> Health Solution</span>. All rights reserved
      </p>
    </div>
  )
}

export default Footer