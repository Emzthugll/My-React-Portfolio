import React from "react";
import Marquee from "react-fast-marquee";
import Css from "@/components/assets/css.png";
import Html from "@/components/assets/html.png";
import Js from "@/components/assets/js.png";
import Reactjs from "@/components/assets/react.png";
import Nodejs from "@/components/assets/node.png";
import Tailwind from "@/components/assets/tailwind.png";
import Nextjs from "@/components/assets/nextjs.png";
import Sql from "@/components/assets/sql.png";
import MongoDB from "@/components/assets/mongo.png";
import Git from "@/components/assets/git.png";
import Github from "@/components/assets/github.png";
import Aws from "@/components/assets/aws.png";
import Figma from "@/components/assets/figma.png";
import Typescript from "@/components/assets/typescript.png";
import Bootstrap from "@/components/assets/bootstrap.png";

const Technologies = () => {
  const technologies = [
    { src: Css, label: "CSS" },
    { src: Html, label: "HTML" },
    { src: Js, label: "JavaScript" },
    { src: Reactjs, label: "React" },
    { src: Nodejs, label: "Node.js" },
    { src: Tailwind, label: "Tailwind CSS" },
    { src: Nextjs, label: "Next.js", bg: "bg-white" },
    { src: Sql, label: "SQL" },
    { src: MongoDB, label: "MongoDB" },
    { src: Git, label: "Git" },
    { src: Github, label: "GitHub", bg: "bg-white" },
    { src: Figma, label: "Figma" },
    { src: Typescript, label: "TypeScript" },
    { src: Bootstrap, label: "Bootstrap" },
    { src: Aws, label: "AWS", bg: "bg-white" },
  ];

  return (
    <div className="container max-w-[1100px] mx-auto py-10 z-30">
      <div
        className="text-end mt-10"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <p className="text-gray-400 font-poppins text-xl lg:text-2xl px-5">
          Technologies
        </p>
        <h1 className="text-3xl lg:text-6xl font-poppins font-extrabold mt-1 mb-10 px-4 py-2 inline-block border-4 border-indigo-500 text-white">
          Skills
        </h1>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r z-40 from-[#030014]"></div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l z-40 from-[#030014]"></div>

        <Marquee direction="right" speed={120} delay={5} pauseOnHover>
          {technologies.map(({ src, label, bg }, index) => (
            <div
              className={`image_wrapper cursor-pointer mx-2 relative group ${
                bg ? bg : ""
              }`}
              key={index}
              style={{ height: "100px", width: "100px", position: "relative" }} // Set fixed height and width for images
            >
              <img
                src={src.src}
                alt={label}
                className="w-full h-full object-contain"
              />

              <span className="tooltip absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-0 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                {label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Technologies;
