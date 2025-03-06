import React from 'react';
import bg from "../assets/mmm_fornt.jpg";

export const Landing = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-white relative' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:"fixed",
        backgroundBlendMode:"multiply",
        backgroundColor:"#2f3138"
    }}>
      <div className='p-6 rounded-xl text-center'>
        <h1 className='lg:text-6xl md:text-5xl text-4xl font-semibold text-[#4fbfce]'>COMPUTER <span className='text-white'>ENGINEERING </span> SOCIETY</h1>
        <h2 className='md:text-xl text-base mt-2'>Madan Mohan Malaviya University Of Technology, <span className='text-[#4fbfce]'>Gorakhpur</span></h2>
        <button className='mt-10 px-6 py-2 border-2 hover:bg-[#4fbfce] hover:text-white border-[#4fbfce] font-medium rounded-3xl shadow-lg transition duration-300'>
          About the Society
        </button>
      </div>
    </div>
  );
};