"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  const resumeUrl =
    "https://storage.googleapis.com/resume-hosting/66daa681019f4.pdf"; // Define your resume URL

  return (
    <div
      id="hero"
      className="w-full h-screen overflow-hidden text-text dark:text-darkText pt-16 sm:pt-20 md:pt-24 lg:pt-0"
    >
      {/* Adjust padding based on screen size */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative mt-3 grid grid-cols-1 sm:grid-cols-2 gap-10 px-4">
          <div className="flex flex-col justify-center items-start max-w-xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">
                Hello there, I&apos;m MJ
              </span>
            </h1>
            <h2 className="text-sm mt-1 mb-4 md:text-xl">
              Aspiring Web Developer | Computer Engineer
            </h2>
            <p className="text-sm md:text-2xl">
              I Transform concepts into flawless functionality.
            </p>
            <a
              className="mt-2 md:mt-4 w-20 md:w-full"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton resumeLink={resumeUrl} />
            </a>
          </div>
          <div className="flex items-center justify-center h-50 w-50">
            <img
              src="./Piicture.png"
              loading="lazy"
              alt="hero_img"
              className="w-full custom-gradient-border max-w-[300px] md:max-w-[400px] object-cover object-center pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
