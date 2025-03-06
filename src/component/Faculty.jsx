import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import sks from "../assets/sks.png"

const Faculty = () => {
  return (
    <div className='flex md:flex-row flex-col bg-[#e5e2e2]'>
        <div className='md:w-2/3 sm:p-14 p-8 flex flex-col justify-center items-center'>
        <h1 className='md:text-5xl text-3xl font-bold text-center mb-8 text-[#132049]'>Prof. SUSHIL KUMAR SAROJ</h1>
        <p className='md:text-3xl text-xl font-normal  mb-6 text-[#132049] underline-offset-8 underline text-justify'>FACULTY ADVISOR</p>
        <p className='text-[#535153] '>I hope this message finds you all in good health and high spirits. I wanted to take a moment to share some important news regarding our CES website. As your faculty advisor, I believe it's my responsibility to keep you informed about developments that impact our community. Our CES website is about to undergo some significant improvements, and I'm genuinely excited about these enhancements. Our team has been working diligently to create a better online experience for all of you. We understand the importance of having a user-friendly and informative platform that serves your needs effectively. Thank you for your continued support and participation in the Computer Engineering Society. Together, we can create a more engaging and dynamic online space for all members.</p>
        <a href="">
        <FaLinkedin className='text-4xl mt-3 hover:text-blue-900' />
        </a>
        </div>
        <div className='md:w-1/3 sm:p-14 p-8 flex justify-center items-center'>
        <img src={sks} alt="" />
        </div>
      
    </div>
  )
}

export default Faculty
