import React from 'react'

const Newsletter = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] '>
      <div className='text-center'>
        <h1 className='   heading'>
          Get in touch
        </h1>
        
        <form action="https://formsubmit.co/info@healthvaultapp.com" method='POST'>
        <div className='text-center mt-[3rem] justify-center'>
          
          {/* Input */}
          <input type="text" placeholder='Name' name="name" required
          className='px-5 py-4 bg-white/80 w-[60%] outline-none rounded-lg placeholder:text-black' />
          
        </div>
        <div className='text-center mt-[1.5rem] justify-center'>
          
          {/* Input */}
          <input type="email" placeholder='Email Address' name="email" required
          className='px-5 py-4 bg-white/80 w-[60%] outline-none rounded-lg placeholder:text-black' />
          
        </div>
        <div className='text-center mt-[1.5rem] justify-center'>
          
          {/* Input */}
         <textarea  id="" name="message" required
         placeholder='Message' cols ={30} rows ={10} 
         className='px-5 py-4 bg-white/80 w-[60%] outline-none rounded-lg placeholder:text-black'></textarea>
          
        </div>
        <div className='text-center mt-[1.5rem] justify-center'>
          
          {/* Input */}
          <button
          className='px-5 py-4  w-[60%] text-[20px] outline-none rounded-lg font-bold  bg-blue-500' >
            Send
          </button>
          
          
        </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter;