import React from "react";

const ProjectCard = ({ title, main, demoUrl, codeUrl, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full max-w-sm bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 w-full h-auto object-cover rounded-t-2xl" src={image} alt={title} />
      <h3 className="px-4 text-lg md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex flex-wrap justify-center gap-2 md:gap-4">
        <button
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => window.open(demoUrl, "_blank")}
        >
          Demo
        </button>
        <button
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => window.open(codeUrl, "_blank")}
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


// import React from "react";
// // import bannerImg from "../../assets/photo-C8q0KQHG.webp";
// const ProjectCard = ({ title, main, demoUrl, codeUrl, image}) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4" src={image} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//         onClick={() => window.open(demoUrl, "_blank")}
//         >
//           Demo
//         </button>

//         <button 
//         className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//         onClick={() => window.open(codeUrl, "_blank")}
//         >
//           Source Code
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
