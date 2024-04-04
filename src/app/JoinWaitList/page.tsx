import React from 'react'

const JoinWaitList = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] bg-cyan-400'>
        <div className='mt-3'>
          <h1 className='text-white md:mx-[3em] md:my-[3rem] text-[35px] md:text-[50px]  font-bold ml-6 uppercase md:text-center text-left'>
            HLV Provides Best <br /> <span className='text-blue-500'>medical Solutions </span> 
          </h1>
          <p className='text-white md:text-center text-left text-[20px] ml-6 mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure aspernatur ratione perspiciatis repellendus dolores aut earum officia, cum rem esse magnam illum rerum aliquam numquam sequi explicabo modi culpa!
          </p>
          <div className='text-center mt-[3rem] justify-center'>
          {/* Input */}
          <input type="email" placeholder='Please enter your email' className='placeholder:text-black  px-[7rem] py-4 rounded-2xl outline-none' />
          
          
        </div>
        <div className='text-center mt-[1rem] justify-center'>
          
          {/* Subscribe button */}
          <button className='px-[9rem] py-4 bg-blue-500  transition-all duration-200 text-white rounded-2xl font-bold'>Join Waitlist</button>
          
        </div>
        </div>
    </div>
  )
}

export default JoinWaitList;