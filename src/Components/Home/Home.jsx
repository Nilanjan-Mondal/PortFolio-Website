import React from "react";
import avatarImg from "../../assets/971-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20 mt-20">
      <div className="md:w-[60%] md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="font-mono text-[#81878B] text-sm md:text-lg tracking-tight ">
          Breaking APIs, fixing bugs, and writing code that works! As a developer, I specialize in crafting scalable web solutions using the MERN stack. Whether it's taming databases or making servers behave, I turn caffeine into efficient backend magic. Always learning, always building—because console.log('debugging') is my second language!
        </p>
        <div className="flex space-x-4 mt-5">
          <a href="#Footer">
            <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Hire Me
            </button>
          </a>
          {/* <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Resume
          </button> */}
        </div>
      </div>
      <div className="w-full md:w-auto mt-10 md:mt-0">
        <img className="w-full h-auto md:max-w-[105%] lg:max-w-[105%]" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;