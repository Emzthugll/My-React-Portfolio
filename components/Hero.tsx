"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Button.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const resumeUrl =
    "https://storage.googleapis.com/resume-hosting/66f3bdd5d23c6.pdf"; // Define your resume URL

  return (
    <div
      id="hero"
      className="w-full h-screen bg-[#030014] overflow-hidden text-text dark:text-darkText pt-16 lg:pt-0 flex flex-col items-center justify-center"
    >
      {/* Top Centered Image */}
      <div className="flex items-center justify-center w-full z-30">
        <div
          className="h-48 w-48 md:h-64 md:w-64 lg:h-70 lg:w-70 rounded-full mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            width={500}
            height={500}
            src="/Pic.png"
            loading="lazy"
            alt="Hero Image"
            className="w-full h-full object-cover bg-blue-300 rounded-full"
          />
        </div>
      </div>

      {/* Text Section Below Image */}
      <div
        className="text-center max-w-4xl mx-auto z-10 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-white  font-extrabold  tracking-wider">
          Hello there, I&apos;m MJ
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg text-gray-400 lg:text-xl tracking-tight font-poppins mt-2 mb-4">
          Web Developer
        </h2>

        <p className="text-3xl md:text-2xl lg:text-4xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 mb-20">
          I Transform concepts into flawless functionality.
        </p>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn1"
        >
          Show Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
