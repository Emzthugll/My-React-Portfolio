"use client";

import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        // Threshold to trigger hiding of navbar
        if (scrollY > lastScrollY) {
          // Scrolling down
          setIsNavbarVisible(false);
        } else {
          // Scrolling up
          setIsNavbarVisible(true);
        }
      } else {
        // At the top of the page
        setIsNavbarVisible(true);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add(
        "overflow-hidden",
        "bg-gray-200",
        "dark:bg-gray-800"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "bg-gray-200",
        "dark:bg-gray-800"
      );
    }

    return () => {
      document.body.classList.remove(
        "overflow-hidden",
        "bg-gray-200",
        "dark:bg-gray-800"
      );
    };
  }, [isNavOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-xl shadow-[#2A0E61]/70  z-50 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="max-w-screen-xl flex items-center justify-between mx-auto p-3 overflow-hidden z-40"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* Logo and Name */}
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse ml-4"
          onClick={closeNav}
        >
          <span className="text-2xl text-white  font-semibold whitespace-nowrap ">
            M <span className="text-blue-600 font-bold">J</span>
          </span>
        </a>

        {/* Navigation Items for Larger Screens */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-8 rtl:space-x-reverse">
          <ul className="flex font-medium flex-row space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#hero"
                className="py-2 px-3 rounded transition duration-200 ease-in-out hover:bg-blue-600 text-white hover:text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="py-2 px-3 rounded transition duration-200 ease-in-out hover:bg-blue-600 text-white hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="py-2 px-3 rounded transition duration-200 ease-in-out hover:bg-blue-600 text-white hover:text-black"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="py-2 px-3 rounded transition duration-200 ease-in-out hover:bg-blue-600 text-white hover:text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Toggle Button and Icons */}
        <div className="flex items-center space-x-4">
          {/* LinkedIn and GitHub Icons */}
          <div className="hidden md:flex text-white space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/marc-jairus-gacula-76b511262/"
            >
              <FaLinkedin className="h-6 w-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/your-profile"
            >
              <FaGithub className="h-6 w-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/your-profile"
            >
              <FaInstagram className="h-6 w-5" />
            </a>
          </div>

          {/* Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fffff"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Menu (Toggle Menu) */}
      <div
        className={`fixed z-50 top-0 right-0 h-screen w-full bg-[#030014]  transform overflow-hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        id="navbar-default"
      >
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-blue-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleNav}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#5f6368"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <ul className="font-medium text-gray-500 h-full flex flex-col p-4 mt-10 rounded-lg">
          <li>
            <a
              href="#hero"
              className="block py-2 px-3 rounded hover:bg-blue-500"
              onClick={closeNav}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 px-3 rounded hover:bg-blue-500"
              onClick={closeNav}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-3 rounded hover:bg-blue-500"
              onClick={closeNav}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 px-3 rounded hover:bg-blue-500"
              onClick={closeNav}
            >
              Contact
            </a>
          </li>
          <div className="flex border-t border-gray-200 dark:border-gray-700 mt-4">
            <div className="flex mt-4 mx-3 gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Emzthug/"
              >
                <FaFacebookSquare className="h-6 w-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/emzthugll/"
              >
                <FaInstagram className="h-6 w-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/marc-jairus-gacula-76b511262/"
              >
                <FaLinkedin className="h-6 w-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/your-profile"
              >
                <FaGithub className="h-6 w-5" />
              </a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
