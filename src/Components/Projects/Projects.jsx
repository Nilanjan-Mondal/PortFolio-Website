import React from "react";
import ProjectCard from "./ProjectCard";
import redBus from "../../assets/redBus.png";
import fakeStore from "../../assets/fakeStore.png";
import backEnd from "../../assets/backEnd.jpg";
import pFolio from "../../assets/pFolio.png";
const Projects = () => {
  return (
    <div id="Projects" className=" p-10 md:p-20 text-white md:pt-0">
      <h1 className="text-2xl  md:text-4xl text-white font-bold text-center md:pb-5 pb-3">Projects</h1>
      <div className="py-12 px-[85px] md:px-[120px] flex flex-wrap gap-5">
        <ProjectCard
          title="Redbus Clone"
          main="this is a redbus clone created using pure html and css"
          codeUrl= "https://github.com/Nilanjan-Mondal/Redbus-Clone.git"
          demoUrl={"https://redbus-clone-otb4p14m9-nilanjan-mondals-projects.vercel.app/"}
          image={ redBus } 
        />
        <ProjectCard
          title="FakeStore UI" 
          main="this is an ecommerce UI created using react js and tailwind css"
          codeUrl={"https://github.com/Nilanjan-Mondal/FakeStore-UI"}
          demoUrl={"https://fakestore-ui.vercel.app/"}
          image={ fakeStore }
        />
        <ProjectCard
          title="PortFolio Website" 
          main="this is my portfolio website created using react js and tailwind css"
          image={ pFolio }
          codeUrl={"https://github.com/Nilanjan-Mondal/PortFolio-Website"}
        />
        <ProjectCard
          title="Restuarant Backend" 
          main="This REST API powers a restaurant website using Node.js, Express.js, and MongoDB for data storage, with Cloudinary handling image uploads."  
          codeUrl={"https://github.com/Nilanjan-Mondal/PizzaApp-Backend"}
          image= { backEnd }
        />
        <ProjectCard
          title="Tweets Backend" 
          main="This REST API powers a Tweeter website using Node.js, Express.js, and MongoDB for data storage, with Cloudinary handling image uploads."  
          codeUrl={"https://github.com/Nilanjan-Mondal/TwitterApp"}
          image= { backEnd }
        />
      </div>
    </div>
  );
};

export default Projects;
