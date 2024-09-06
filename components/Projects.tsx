import React from "react";
import Image from "next/image";
import First from "./assets/Proj.png";
import Second from "./assets/Proj2.png";
import Third from "./assets/Third.png";
import Fourth from "./assets/Proj4.png";
import Fifth from "./assets/Proj5.png";
import {
  PeakVoyageIcons,
  EcommerceIcons,
  WeatherAppIcons,
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
    title: "My Updated Portfolio",
    description:
      "This landing page is my first major front-end project created with React. It taught me how to build reusable components and dynamically display content. By using various React tools, I developed a clean and functional travel agency website, showcasing my new skills and creating an engaging user experience.",
    imageUrl: Fifth,
    link: "https://peakvoyage.netlify.app",
    icons: <PortfolioIcons />, // Unique icons for this project
  },
  {
    title: "My First Portfolio",
    description:
      "An online store for gym equipment with a modern UI/UX design that provides an excellent shopping experience.",
    imageUrl: Second,
    link: "https://emzthugll.github.io/FCC-Portfolio/",
    icons: <EcommerceIcons />, // Unique icons for this project
  },
  {
    title: "Survey Form",
    description:
      "A weather forecasting app using React and OpenWeather API, providing accurate and real-time weather updates.",
    imageUrl: Third,
    link: "https://emzthugll.github.io/Survey-Form/",
    icons: <WeatherAppIcons />, // Unique icons for this project
  },
  {
    title: "COE Landing Page",
    description:
      "A weather forecasting app using React and OpenWeather API, providing accurate and real-time weather updates.",
    imageUrl: Fourth,
    link: "https://emzthugll.github.io/COE-Website/",
    icons: <COEIcons />, // Unique icons for this project
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center z-0"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto py-10  z-50">
        <div className="text-center mt-5">
          <h1
            className="text-3xl lg:text-4xl font-bold  mb-4 rounded-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 dark:text-white"
            style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
          >
            Projects
          </h1>
        </div>
        <p className="text-center text-md text-muted-foreground mb-10">
          Here you will find some of the personal and client projects that I
          created.
        </p>
        <div className="flex flex-col items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-8 p-4 bg-transparent  rounded-lg  w-full max-w-5xl border bg-gradient-to-r from-purple-400 to-indigo-400 dark:text-white"
              style={{ boxShadow: " 0 4px 6px rgb(0,0,255,0.6)" }}
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden  ">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="responsive"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
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
                    className=" text-black dark:text-white dark:hover:text-black  flex justify-center gap-2 items-center  shadow-xl text-lg bg-transparent border-black dark:border-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black dark:before:bg-white  hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2  rounded-full group"
                  >
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 19"
                      className="w-8 h-8 justify-end group-hover:rotate-90   ease-linear duration-300   group-hover:border-none p-2 rotate-45"
                    >
                      <path
                        className="fill-gray-800 dark:fill-white group-hover:fill-white dark:group-hover:fill-black"
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
