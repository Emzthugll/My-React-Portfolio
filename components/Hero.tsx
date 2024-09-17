"use client";
import React from "react";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  const resumeUrl =
    "https://storage.googleapis.com/resume-hosting/66daa681019f4.pdf"; // Define your resume URL

  return (
    <div
      id="hero"
      className="w-full h-screen overflow-hidden text-text dark:text-darkText pt-16 lg:pt-0 flex flex-col items-center justify-center"
    >
      {/* Full height and width container */}
      <div className="flex flex-col items-center justify-center h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
        {/* Radial gradient for the container */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>

        {/* Top Centered Image */}
        <div className="flex items-center justify-center w-full z-10">
          <div className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden mb-4">
            <Image
              width={500}
              height={500}
              src="/Pic.png"
              loading="lazy"
              alt="hero_image"
              className="w-full h-full object-cover bg-blue-300 rounded-full"
            />
          </div>
        </div>

        {/* Text Section Below Image */}
        <div className="text-center max-w-4xl mx-auto z-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest font-semibold leading-tight">
            <span className="">Hello there, I&apos;m MJ</span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl tracking-tight font-mono font-semibold mt-2 mb-4">
            Full Stack Web Developer
          </h2>

          <p className="text-3xl md:text-2xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600 mb-7">
            I Transform concepts into flawless functionality.
          </p>
          <a
            className="mt-2 md:mt-4 w-full max-w-xs inline-block"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton resumeLink={resumeUrl} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
