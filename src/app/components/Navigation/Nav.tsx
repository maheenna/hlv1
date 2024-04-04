import Link from 'next/link'
import React from 'react'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import logo from "../../../../public/image/logo.png"
import Image from 'next/image'

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className='h-[12vh] bg-white'>
            <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>

                {/* logo design */}
                <div className='flex items-center space-x-0 md:space-x-1'>
               <Image src={logo} alt='logo' className='w-[75px]'/>

                    <h1 className='text-[20px] sm:text-[30px] font-semibold'>HLV</h1>
                </div>
                {/* Nav Links */}

                <ul className='hidden lg:flex items-center space-x-10'>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-blue-500' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-blue-500' href='/About'>About</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-blue-500' href='/FQA'>FQA</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-blue-500' href='/JoinWaitList'>Join Waitlist</Link>
                    </li>
                    
                </ul>
                <div className='flex items-center space-x-4'>
                    <button className='px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-500 transition-all duration-200  flex rounded-md item-center space-x-2 text-white'>
                        <span>
                            <BiCycling className='w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        </span>
                        <span className='font-bold'>
                            Order Now
                        </span>
                    </button>
                    <button className='sm:px-6 sm:py-3 px-4 py-2  transition-all duration-200
                     bg-blue-500 flex items-center rounded-md text-white'>
                        <BiShoppingBag className='w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                    </button>
                    <HiBars3BottomRight onClick={openNav} className='lg:hidden h-[2rem] w-[2rem] text-black' />
                </div>
            </div>
        </div>
    )
}

export default Nav