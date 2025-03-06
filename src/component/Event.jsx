import React from "react";
import bg from "../assets/about-bg.jpg";
import a from "../assets/1.jpg"
import b from "../assets/2.jpg"
import c from "../assets/3.jpg"
import d from "../assets/4.jpg"
import e from "../assets/5.jpg"
import f from "../assets/6.jpg"
import g from "../assets/7.jpg"



const Event = () => {
   
  return (
    <div
      className="h-[100%] text-white "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        backgroundColor: "#2e3b6a",
      }}
    >
         <h1 className="text-white text-4xl font-bold text-center pt-10 pe-3 underline underline-offset-8">
        EVENTS
      </h1>
      <p className="text-[#9d9a9d] text-2xl font-normal text-center my-5">
        Here are some of our Events
      </p>
      <div className="flex md:flex-row flex-col">
      <div className="md:w-1/2">
     
      {/* glass effect */}
      <div className="glass md:p-14 p-5">
        <p className="text-4xl my-4 font-semibold">Join us for the exciting events.</p>
        <p className="text-xl my-3">“By failing to prepare, you are preparing to fail.”</p>
        <p className="text-md my-3 ">The "Events" section showcases a curated list of upcoming tech gatherings. Stay updated with our recommended events, including workshops, webinars, coding events, and many more. Find opportunities for learning and networking in the ever-evolving world of technology.</p>
      
      <button className="p-2 mt-10 border-2 border-double border-white hover:bg-blue-900 hover:text-white"
      >Explore the Events</button>
      </div>
      </div>
      <div className="md:w-1/2 md:p-10 p-5 flex justify-center items-center">
      <img src={a} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Event;
