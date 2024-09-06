import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-400">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            &copy;{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              MJGACULA
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 gap-3 justify-center items-center">
            <a target="blank" href="https://www.facebook.com/Emzthug/">
              <FaFacebookSquare className="h-7 w-6 fill-gray-300 hover:fill-blue-500" />
            </a>
            <a target="blank" href="">
              <FaGithub className="h-6 w-6 fill-gray-300 hover:fill-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/marc-jairus-gacula-76b511262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="h-7 w-6 fill-gray-300 hover:fill-blue-500" />
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
