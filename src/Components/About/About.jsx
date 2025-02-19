import React from "react";
import AboutImg from "../../assets/software-developer-gef18a0b18_1280.jpg";
// import AboutImg from "../../assets/240_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 pr-0 md:pr-[50px] mb-6 md:mb-0" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="md:mt-8" />

              <span className="w-full md:w-96">
                <p className="text-sm md:text-md leading-tight text-[#81878B] text-xl md:py-8">
                  I'm a full-stack developer with a strong focus on backend engineering. Specializing in the MERN stack, I build scalable, high-performance applications using Node.js, Express, MongoDB, and MySQL, while also crafting intuitive user interfaces with React.

                  From designing efficient APIs to creating seamless frontend experiences, I enjoy solving complex problems and optimizing performance at every level. My goal is to develop reliable and scalable solutions that make an impact.

                  Always learning, always building—because great applications start with great architecture.

                  Let's build something awesome!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
