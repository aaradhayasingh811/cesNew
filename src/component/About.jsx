import React from 'react'
import bg from "../assets/about-bg.jpg"

const About = () => {
  return (
    <div className='flex md:flex-row flex-col justify-around text-white' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:"fixed",
        backgroundBlendMode:"multiply",
        backgroundColor:"#2e3b6a"
    }}>
      <div className="md:w-1/2 w-full sm:p-14 p-6 sm:text-base text-[0.9rem]">
        <h1 className='text-4xl font-bold mb-8'>About The Society</h1>
        <p className='text-md'>The Computer Engineering Society has been functioning since 1993 with the collective efforts of a group of B.Tech. students who have a strong urge to complement the theoretical and practical knowledge imparted in the classroom and laboratory, with an emphasis on the development of the overall personality of budding engineering graduates. With a humble beginning, the society has grown steadily to its great strength of students as well as teachers and members and is one of the most active and popular technical societies on campus. The society can proudly boast of having committed members.</p>
      </div>
      <div className="md:w-1/2 w-full sm:p-14 p-6 sm:text-base text-[0.9rem]">
        <h1 className='text-4xl font-bold mb-8'>Our Objectives</h1>
        <p className='text-md'>The society provides a platform for the students to share and increase their knowledge. Apart from improving technical awareness, society has also emphasized the overall development of students.</p>
      </div>
    </div>
  )
}

export default About
