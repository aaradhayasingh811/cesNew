import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import bg from "../assets/about-bg.jpg"
import { IoIosSend } from "react-icons/io";


const Contact = () => {
  return (
    <div className='min-h-screen' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment:"fixed",
            backgroundBlendMode:"multiply",
            backgroundColor:"#2e3b6a"
        }}>
      <h1 className='text-4xl text-white text-center pt-14 mb-8 font-bold underline underline-offset-8'>CONTACT US</h1>
      <p className='text-center sm:text-2xl text-xl text-gray-400 '>Any suggestion? Reach us out here...</p>
      <div className="flex sm:flex-row flex-col justify-around mt-20">
        <div className="flex flex-col justify-center items-center space-y-4">
          <IoLocationOutline size={60} className='text-[#18caf1]' />
          <h2 className="text-xl text-white font-medium">Address</h2>
          <p className='sm:text-md text-sm text-center text-gray-400'>Madan Mohan Malaviya University of Technology, Gorakhpur
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <MdOutlineMail size={60} className='text-[#18caf1]' />
          <h2 className="text-xl text-white font-medium">Email</h2>
          <p className='sm:text-md text-sm text-center text-gray-400'>cesmmmut.web@gmail.com</p>
        </div>
      </div>
      <form action="" className='sm:px-20 px-5 space-y-6 mt-8'>
        <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 w-full">
          <input type="text" className='w-full p-3 rounded-sm' name="name" placeholder='Your name' required  />
          <input type="email" className='w-full p-3 rounded-sm' name="email" placeholder='Your email' required  />
        </div>
        <input type="text" className='w-full p-3 rounded-sm' name="subject" placeholder='Subject' required />
        <br />
        <textarea name="message" id="message" placeholder='Your message' className='w-full p-7 rounded-sm'></textarea>
        <div className="flex justify-center pb-24">
        <button className='text-lg rounded-xl flex items-center font-semibold px-6 py-2 hover:bg-white hover:text-blue-900 gap-1 bg-blue-200 text-blue-900 ]'>Submit
          <IoIosSend/>
        </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
