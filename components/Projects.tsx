import React from "react";
import Image from "next/image";
import First from "./assets/Proj.png";
import Second from "./assets/Proj2.png";
import Third from "./assets/Third.png";
import Fourth from "./assets/Proj4.png";
import Fifth from "./assets/Proj5.png";
import Sixth from "./assets/Proj6.png";
import {
  PeakVoyageIcons,
  FirstPortfolioIcons,
  SurveyFormIcons,
  COEIcons,
  PortfolioIcons,
} from "./ui/SvgIcons";

// SVG Icon Definitions

const projects = [
  {
    title: "PeakVoyage Landing Page",
    description:
      "This landing page is my first major front-end project created with React. It taught me how to build reusable components and dynamically display content. By using various React tools, I developed a clean and functional travel agency website, showcasing my new skills and creating an engaging user experience.",
    imageUrl: First,
    link: "https://peakvoyage.netlify.app",
    icons: <PeakVoyageIcons />, // Unique icons for this project
  },
  {
    title: "Orion Landing Page",
    description:
      "The Orion Cloud landing page, built with React, Tailwind, and Framer Motion, offers a sleek, responsive design with smooth animations. It highlights cloud services with modern visuals, ensuring a fluid and engaging user experience.",
    imageUrl: Sixth,
    link: "https://emzthugll.github.io/Orion-Landing-Page/",
    icons: <PeakVoyageIcons />, // Unique icons for this project
  },
  {
    title: "My Updated Portfolio",
    description:
      "My portfolio showcases a range of projects that highlight my skills in crafting intuitive, responsive websites and applications. Each project demonstrates my commitment to quality, attention to detail, and creativity. Feel free to explore and see how I bring concepts to life with cutting-edge technologies and thoughtful design.",
    imageUrl: Fifth,
    link: "https://main--mj-react-portfolio.netlify.app/",
    icons: <PortfolioIcons />, // Unique icons for this project
  },
  {
    title: "My First Portfolio",
    description:
      "My portfolio showcases a range of projects that highlight my skills in crafting intuitive, responsive websites and applications. Each project demonstrates my commitment to quality, attention to detail, and creativity. Feel free to explore and see how I bring concepts to life with cutting-edge technologies and thoughtful design.",
    imageUrl: Second,
    link: "https://emzthugll.github.io/FCC-Portfolio/",
    icons: <FirstPortfolioIcons />, // Unique icons for this project
  },
  {
    title: "Survey Form",
    description:
      "This survey form is designed to gather valuable feedback from users in a streamlined and efficient manner. Created using basic HTML and CSS. It offers a clean and user-friendly interface for respondents.",
    imageUrl: Third,
    link: "https://emzthugll.github.io/Survey-Form/",
    icons: <SurveyFormIcons />, // Unique icons for this project
  },
  {
    title: "COE Landing Page",
    description:
      " This site provides a clear and engaging introduction to our engineering programs, faculty, and research opportunities. Built using only HTML, CSS, and JavaScript, it features a straightforward and user-friendly design.",
    imageUrl: Fourth,
    link: "https://emzthugll.github.io/COE-Website/",
    icons: <COEIcons />, // Unique icons for this project
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full w-full bg-[#030014] relative flex items-center justify-center "
    >
      <div className="container max-w-[1100px] mx-auto py-10  z-30">
        <div className="text-end    mt-10" data-aos="zoom-in">
          <p className="text-gray-400 font-PopReg text-xl lg:text-2xl px-5">
            MY WORKS
          </p>
          <h1 className="text-3xl lg:text-6xl font-PopBold mt-1 mb-4  px-4 py-2 inline-block border-4 border-indigo-500 text-white">
            Projects
          </h1>
        </div>

        <div className="flex flex-col items-center ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-8 p-4 bg-transparent rounded-lg w-full max-w-5xl bg-gradient-to-r from-purple-100 to-indigo-100 text-white transition-all duration-500 hover:shadow-[0_0_20px_#A020F0,0_0_30px_#4B0082] cursor-pointer z-30"
              data-aos="fade-right"
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden z-30">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="responsive"
                  width={1200}
                  height={800}
                  className=" transition-transform duration-300 ease-in-out transform hover:scale-110 z-20"
                  data-aos="zoom-in-up"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  text-white hover:text-black  flex justify-center gap-2 items-center  shadow-xl text-lg bg-transparent  border-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full  before:bg-white   before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2  rounded-full group"
                  >
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 19"
                      className="w-8 h-8 justify-end group-hover:rotate-90   ease-linear duration-300   group-hover:border-none p-2 rotate-45"
                    >
                      <path
                        className=" fill-white group-hover:fill-black "
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      ></path>
                    </svg>
                  </a>
                  {project.icons}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
