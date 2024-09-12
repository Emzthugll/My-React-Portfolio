import React from "react";
import Image from "next/image";
import HTML from "@/components/assets/html.png";
import REACT from "@/components/assets/react.png";
import CSS from "@/components/assets/css.png";
import JAVASCRIPT from "@/components/assets/javascript.png";
import NODE from "@/components/assets/node.png";
import TAILWIND from "@/components/assets/tailwind.png";
import PYTHON from "@/components/assets/python.png";
import FIGMA from "@/components/assets/figma.png";
import MATLAB from "@/components/assets/matlab.png";
import MONGO from "@/components/assets/mongo.png";
import C from "@/components/assets/Csharp.png";

const About = () => {
  return (
    <section id="about" className="   dark:bg-[#0d1727] ">
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center z-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full  max-w-[1200px] mx-auto px-4 text-text dark:text-darkText z-50">
          <div className="flex flex-col items-center justify-center w-full mb-10 ">
            <h1
              className=" text-3xl lg:text-4xl font-bold mt-20 md:mt-20 rounded-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 dark:text-white"
              style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
            >
              About Me
            </h1>
          </div>
          <div className="grid md:grid-cols-3   md:gap-10  justify-center items-start">
            <div className="md:col-span-2 paragraph mb-10 text-lg">
              <p className="mb-3 opacity: 1; transform: none;">
                I am <span className="font-bold">MJ</span>, a Computer
                Engineering graduate from Mariano Marcos State University with a
                deep passion for web development. My coding journey began in
                college, where I played a key role in developing an Early Flood
                Detection and Monitoring System using MQTT Protocol.
              </p>
              <p className="mb-3">
                I have experience with front-end development tools and
                technologies. I am comfortable working with HTML, CSS, and
                JavaScript to create responsive and user-friendly web
                interfaces. My experience also includes using modern frameworks
                like React and styling tools such as Tailwind CSS. I am keen on
                applying these skills to develop engaging web applications and
                continually improving my knowledge in front-end development.
              </p>
              <p className="mb-3">
                Alongside my core technical skills,During my college years, I
                gained proficiency in several programming languages and
                technologies, including Python, C++, MATLAB, Java, and AWS. This
                diverse skill set has equipped me with a solid understanding of
                various programming paradigms and development tools.
              </p>
              <p>
                I am eager to explore new opportunities and connect with
                professionals who see a potential fit for my skills and
                enthusiasm. Let’s connect and discuss how we can work together!
              </p>
            </div>
            <div className="sm:min-w-[250px]  flex flex-col p-3   ">
              <div className="flex flex-row items-start mb-1 ml-1 ">
                <h3 className="font-bold text-lg">What I use</h3>
              </div>
              <div className="flex flex-wrap text-sm">
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium   rounded-2xl bg-orange-400">
                  <Image className="w-4 mr-1 " src={HTML} alt="" />
                  Html
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-blue-500">
                  <Image className="w-4 mr-1 " src={CSS} alt="" />
                  CSS
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium   rounded-2xl bg-yellow-300">
                  <Image className="w-4 mr-1 " src={JAVASCRIPT} alt="" />
                  JavaScript
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium   rounded-2xl bg-sky-500">
                  <Image className="w-4 mr-1 " src={REACT} alt="" />
                  React
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-green-600">
                  <Image className="w-4 mr-1 " src={NODE} alt="" />
                  Node.js
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-sky-800">
                  <Image className="w-4 mr-1 " src={TAILWIND} alt="" />
                  TailwindCSS
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium rounded-2xl  bg-black text-white dark:bg-white dark:text-black ">
                  <svg
                    className="mr-1"
                    fill="currentColor"
                    height="18"
                    viewBox="0 0 32 32"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z" />
                  </svg>
                  Next.js
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium rounded-2xl bg-green-200">
                  <svg
                    className="mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    baseProfile="basic"
                  >
                    <linearGradient
                      id="N8aMJ-jZ4-cfldZrsnvhda"
                      x1="38.263"
                      x2="10.15"
                      y1="1373.62"
                      y2="1342.615"
                      gradientTransform="translate(0 -1333.89)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#823af3" />
                      <stop offset=".36" stop-color="#4b66e1" />
                      <stop offset=".906" stop-color="#01f1c4" />
                    </linearGradient>
                    <path
                      fill="url(#N8aMJ-jZ4-cfldZrsnvhda)"
                      fillRule="evenodd"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24	S12.955,4,24,4S44,12.955,44,24z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378	c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372	c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902	c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962	c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034	c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026	c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584	c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141	c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098	c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425	c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062	c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673	c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991	c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283	c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328	c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865	c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752	c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62	c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408	c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318	c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398	c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718	c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018	c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228	c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654	c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01	c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301	c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045	c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035	c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629	c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018	c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159	C29.367,27.91,29.258,27.474,29.194,26.962L29.194,26.962z M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346	c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Canva
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-red-300">
                  <Image className="w-3 mr-2 " src={FIGMA} alt="" />
                  Figma
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-blue-400">
                  <svg
                    className="mr-2"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z"
                      fill="url(#paint0_linear_87_8101)"
                    />
                    <path
                      d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z"
                      fill="url(#paint1_linear_87_8101)"
                    />
                    <path
                      d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z"
                      fill="url(#paint2_linear_87_8101)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_87_8101"
                        x1="23.79"
                        y1="2"
                        x2="23.79"
                        y2="30"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#32B5F1" />
                        <stop offset="1" stop-color="#2B9FED" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_87_8101"
                        x1="21.0018"
                        y1="5.53398"
                        x2="1.0217"
                        y2="22.3051"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0F6FB3" />
                        <stop offset="0.270551" stop-color="#1279B7" />
                        <stop offset="0.421376" stop-color="#1176B5" />
                        <stop offset="0.618197" stop-color="#0E69AC" />
                        <stop offset="0.855344" stop-color="#0F70AF" />
                        <stop offset="1" stop-color="#0F6DAD" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_87_8101"
                        x1="1.15522"
                        y1="9.98389"
                        x2="21.0791"
                        y2="26.4808"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#1791D2" />
                        <stop offset="1" stop-color="#1173C5" />
                      </linearGradient>
                    </defs>
                  </svg>
                  VS Code
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-blue-700">
                  <svg
                    className="mr-2"
                    fill="none"
                    height="22"
                    viewBox="0 0 32 32"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="m16 30c7.732 0 14-6.268 14-14 0-7.73199-6.268-14-14-14-7.73199 0-14 6.26801-14 14 0 7.732 6.26801 14 14 14z"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                    <path
                      clipRule="evenodd"
                      d="m9 20.3335h7v6.6667z"
                      fill="#05f"
                      fillRule="evenodd"
                    />
                    <path d="m16 13.6665h-7v6.6667h14z" fill="#0af" />
                    <path d="m9 7 7 6.6667h7v-6.6667z" fill="#8df" />
                  </svg>
                  Framer Motion
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-violet-500">
                  <svg
                    className="mr-2"
                    height="18"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 256"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m0 222.991225c0 18.232249 14.7785318 33.008775 33.0087747 33.008775h189.9824503c18.232249 0 33.008775-14.778532 33.008775-33.008775v-189.9824503c0-18.2322484-14.778532-33.0087747-33.008775-33.0087747h-189.9824503c-18.2322484 0-33.0087747 14.7785318-33.0087747 33.0087747z"
                      fill="#563d7c"
                    />
                    <path
                      d="m106.157563 113.238095v-36.2535012h31.911765c3.039231 0 5.969874.2532655 8.792017.759804 2.822143.5065384 5.318616 1.4110579 7.489495 2.7135854 2.17088 1.3025275 3.907557 3.1115664 5.210084 5.4271709 1.302528 2.3156044 1.953782 5.2824282 1.953782 8.9005602 0 6.5126377-1.953762 11.2161387-5.861345 14.1106447-3.907582 2.894505-8.900529 4.341736-14.978991 4.341736zm-34.082633-62.738095v155h75.112045c6.946813 0 13.712619-.868339 20.297619-2.605042s12.446286-4.414081 17.584033-8.032213c5.137748-3.618132 9.226176-8.285452 12.265407-14.002101 3.03923-5.716648 4.558823-12.482454 4.558823-20.297619 0-9.696594-2.35175-17.981992-7.055322-24.856442-4.703572-6.874451-11.831185-11.686495-21.383053-14.436275 6.946813-3.328681 12.193026-7.598013 15.738795-12.808123 3.54577-5.21011 5.318628-11.7226501 5.318628-19.5378153 0-7.236264-1.193966-13.3146345-3.581933-18.2352941-2.387967-4.9206595-5.752779-8.8643642-10.094538-11.8312325-4.341758-2.9668682-9.55179-5.1015341-15.630252-6.4040616s-12.808086-1.9537815-20.189076-1.9537815zm34.082633 128.515406v-42.549019h37.121849c7.380989 0 13.314637 1.700496 17.80112 5.10154 4.486484 3.401044 6.729692 9.081426 6.729692 17.041317 0 4.052308-.687435 7.380939-2.062325 9.985994s-3.22011 4.667359-5.535714 6.186975c-2.315605 1.519615-4.992982 2.605039-8.032213 3.256302-3.039231.651264-6.223139.976891-9.551821.976891z"
                      fill="#fff"
                    />
                  </svg>
                  Bootstrap
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-orange-400">
                  <svg
                    className="mr-2"
                    height="18"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 256"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m251.172245 116.593517-111.773492-111.76506398c-6.43232-6.43793736-16.872901-6.43793736-23.313647 0l-23.2097197 23.20971908 29.4426087 29.4426088c6.842415-2.3117025 14.687598-.7612046 20.14243 4.6936272 5.480111 5.4885383 7.019374 13.4011341 4.651494 20.2660201l28.375237 28.3752368c6.864886-2.365071 14.785908-.834235 20.268829 4.657112 7.662606 7.659797 7.662606 20.075017 0 27.740432-7.665415 7.665415-20.080635 7.665415-27.748859 0-5.763807-5.769426-7.187906-14.23537-4.269487-21.336201l-26.462394-26.4623945-.002809 69.6375845c1.867901.926928 3.631873 2.160023 5.187989 3.710521 7.662606 7.659797 7.662606 20.075017 0 27.746049-7.665415 7.662607-20.086252 7.662607-27.740432 0-7.662606-7.671032-7.662606-20.086252 0-27.746049 1.893181-1.890372 4.084102-3.320088 6.421084-4.280723v-70.2864335c-2.336982-.9550168-4.525094-2.3763067-6.421084-4.2807229-5.805941-5.7975142-7.201951-14.3168264-4.227354-21.4457468l-29.0212779-29.0268954-76.64010496 76.6344876c-6.44074623 6.443555-6.44074623 16.884136 0 23.322074l111.77349086 111.767872c6.435129 6.437938 16.872901 6.437938 23.316456 0l111.251042-111.248231c6.437935-6.440746 6.437935-16.886945 0-23.324883"
                      fill="#de4c36"
                    />
                  </svg>
                  Git
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-black text-white dark:bg-white dark:text-black ">
                  <svg
                    className="mr-1"
                    fill="currentColor"
                    height="18"
                    viewBox="0 0 32 32"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641 1.281-.355 2.641-.532 4-.541 1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                  </svg>
                  GitHub
                </p>
                <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-green-700  ">
                  <Image className="w-4 mr-2  " src={MONGO} alt="" />
                  MongoDB
                </p>
              </div>

              <div className="relative w-fit h-fit overflow-y-clip">
                <div className="flex flex-row items-start mb-2 ml-1">
                  <h3 className="font-bold text-lg">What I have learned</h3>
                </div>
                <div className="flex flex-wrap text-sm">
                  <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-orange-200  ">
                    <svg
                      className="mr-1 justify-center"
                      height="20"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 153"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m72.392053 55.4384106c0 3.1364238.3390728 5.6794702.9324503 7.5443709.6781457 1.8649006 1.5258278 3.8993377 2.7125828 6.1033112.4238411.6781457.5933775 1.3562914.5933775 1.9496689 0 .8476821-.5086093 1.6953642-1.6105961 2.5430463l-5.3403973 3.5602649c-.7629139.5086093-1.5258278.762914-2.2039735.762914-.8476821 0-1.6953642-.4238411-2.5430464-1.186755-1.1867549-1.2715232-2.2039735-2.6278146-3.0516556-3.984106-.8476821-1.4410596-1.6953642-3.0516556-2.6278146-5.0013245-6.6119205 7.7986755-14.9192053 11.6980133-24.9218543 11.6980133-7.1205298 0-12.8-2.0344371-16.9536424-6.1033113-4.1536423-4.0688742-6.2728476-9.4940397-6.2728476-16.2754967 0-7.205298 2.5430463-13.0543046 7.7139072-17.4622516 5.170861-4.4079471 12.0370861-6.6119206 20.768212-6.6119206 2.8821192 0 5.8490066.2543047 8.9854304.6781457 3.1364239.4238411 6.3576159 1.1019868 9.7483444 1.8649007v-6.1880795c0-6.4423841-1.3562914-10.9350993-3.984106-13.5629139-2.7125827-2.6278146-7.2900662-3.8993377-13.8172185-3.8993377-2.9668874 0-6.018543.3390728-9.1549669 1.1019867-3.1364238.7629139-6.1880795 1.6953643-9.1549669 2.8821192-1.3562914.5933775-2.3735099.9324504-2.9668874 1.1019868s-1.0172185.2543046-1.3562914.2543046c-1.186755 0-1.7801324-.8476821-1.7801324-2.6278145v-4.1536424c0-1.35629142.1695364-2.37350997.5933774-2.96688745.4238411-.59337748 1.186755-1.18675497 2.37351-1.78013245 2.9668874-1.52582782 6.5271523-2.79735099 10.6807947-3.81456954 4.1536424-1.10198675 8.5615894-1.61059602 13.223841-1.61059602 10.0874173 0 17.4622517 2.28874172 22.2092716 6.86622516 4.6622516 4.5774834 7.0357616 11.5284768 7.0357616 20.8529801v27.4649007zm-34.4158941 12.8847682c2.797351 0 5.6794702-.5086093 8.7311259-1.5258278 3.0516556-1.0172185 5.7642384-2.8821192 8.0529801-5.4251656 1.3562914-1.610596 2.3735099-3.3907284 2.8821192-5.4251655s.8476821-4.4927153.8476821-7.3748345v-3.5602649c-2.4582781-.5933775-5.0860927-1.1019867-7.7986755-1.4410596-2.7125828-.3390728-5.3403973-.5086092-7.9682119-.5086092-5.6794702 0-9.8331126 1.1019867-12.6304636 3.3907284-2.797351 2.2887418-4.1536424 5.5099338-4.1536424 9.7483444 0 3.984106 1.0172186 6.9509934 3.1364239 8.9854305 2.0344371 2.1192053 5.0013245 3.1364238 8.9006622 3.1364238zm68.0688741 9.1549669c-1.525828 0-2.543046-.2543046-3.221192-.8476821-.678146-.5086093-1.271523-1.6953643-1.780132-3.3059603l-19.9205302-65.5258278c-.5086093-1.69536424-.7629139-2.797351-.7629139-3.39072848 0-1.35629139.6781457-2.1192053 2.0344371-2.1192053h8.3072848c1.610596 0 2.7125827.25430464 3.3059602.84768212.6781457.50860927 1.186755 1.69536424 1.6953643 3.30596027l14.2410597 56.11655629 13.223841-56.11655629c.423841-1.69536424.93245-2.797351 1.610596-3.30596027s1.864901-.84768212 3.390728-.84768212h6.781457c1.610596 0 2.712583.25430464 3.390729.84768212.678146.50860927 1.271523 1.69536424 1.610596 3.30596027l13.393377 56.79470199 14.664901-56.79470199c.508609-1.69536424 1.101987-2.797351 1.695364-3.30596027.678146-.50860927 1.780133-.84768212 3.305961-.84768212h7.883443c1.356292 0 2.119206.6781457 2.119206 2.1192053 0 .42384106-.084769.84768212-.169537 1.35629139s-.254305 1.18675497-.593377 2.1192053l-20.429139 65.52582779c-.50861 1.6953643-1.101987 2.797351-1.780133 3.3059603s-1.780132.8476821-3.221192.8476821h-7.290066c-1.610596 0-2.712583-.2543046-3.390729-.8476821-.678145-.5933775-1.271523-1.6953643-1.610596-3.3907285l-13.139073-54.6754967-13.054304 54.5907285c-.423841 1.6953642-.93245 2.797351-1.610596 3.3907285s-1.864901.8476821-3.390729.8476821zm108.927152 2.2887417c-4.407947 0-8.815894-.5086093-13.054304-1.5258278-4.238411-1.0172185-7.544371-2.1192053-9.748345-3.3907285-1.356291-.7629139-2.288741-1.610596-2.627814-2.3735099s-.508609-1.610596-.508609-2.3735099v-4.3231788c0-1.7801325.678145-2.6278146 1.949668-2.6278146.50861 0 1.017219.0847682 1.525828.2543046.50861.1695364 1.271523.5086093 2.119206.8476821 2.882119 1.2715232 6.018543 2.2887418 9.324503 2.9668875 3.390728.6781456 6.696689 1.0172185 10.087417 1.0172185 5.340397 0 9.49404-.9324503 12.376159-2.797351s4.407947-4.5774834 4.407947-8.0529801c0-2.37351-.762914-4.3231788-2.288742-5.9337749-1.525827-1.610596-4.407947-3.0516556-8.561589-4.407947l-12.291391-3.8145695c-6.188079-1.9496689-10.765563-4.8317881-13.562914-8.6463576-2.797351-3.7298014-4.23841-7.8834437-4.23841-12.2913908 0-3.5602649.762914-6.6966887 2.288741-9.4092715 1.525828-2.7125828 3.560265-5.0860927 6.103312-6.95099337 2.543046-1.94966887 5.425165-3.39072847 8.815894-4.40794702 3.390728-1.01721854 6.950993-1.4410596 10.680794-1.4410596 1.864901 0 3.81457.08476821 5.679471.33907285 1.949668.25430464 3.729801.59337748 5.509933.93245033 1.695365.42384106 3.305961.84768212 4.831788 1.35629139 1.525828.50860927 2.712583 1.01721854 3.560265 1.52582782 1.186755.67814569 2.034437 1.35629139 2.543047 2.11920529.508609.6781457.762914 1.61059603.762914 2.797351v3.98410591c0 1.7801325-.678146 2.7125828-1.949669 2.7125828-.678146 0-1.780133-.3390728-3.221192-1.0172185-4.831788-2.2039735-10.256954-3.3059603-16.275497-3.3059603-4.831788 0-8.646358.7629139-11.274172 2.37351-2.627815 1.610596-3.984106 4.0688741-3.984106 7.5443708 0 2.3735099.847682 4.407947 2.543046 6.0185431 1.695364 1.610596 4.831788 3.221192 9.324504 4.6622516l12.037086 3.8145696c6.103311 1.9496688 10.511258 4.6622516 13.139072 8.1377483 2.627815 3.4754967 3.899338 7.4596026 3.899338 11.8675497 0 3.6450331-.762914 6.9509933-2.203973 9.8331126-1.525828 2.8821192-3.560265 5.4251655-6.18808 7.4596026-2.627814 2.1192053-5.764238 3.6450331-9.409271 4.7470199-3.81457 1.1867549-7.798676 1.7801324-12.121855 1.7801324z"
                        fill="#252f3e"
                      />
                      <path
                        d="m230.993377 120.964238c-27.888741 20.598676-68.407947 31.533775-103.247682 31.533775-48.8264897 0-92.8211917-18.055629-126.05033076-48.063576-2.62781457-2.37351-.25430464-5.5947019 2.8821192-3.729801 35.94172186 20.85298 80.27549666 33.483443 126.13509956 33.483443 30.940397 0 64.93245-6.442384 96.21192-19.666225 4.662252-2.119205 8.646358 3.051656 4.068874 6.442384zm11.613246-13.223841c-3.560265-4.577483-23.565563-2.203973-32.635762-1.101986-2.712583.339072-3.136424-2.034437-.678146-3.81457 15.936424-11.1894039 42.129802-7.9682119 45.181457-4.2384105 3.051656 3.8145695-.847682 30.0079465-15.766887 42.5536425-2.288742 1.949669-4.492715.93245-3.475497-1.610596 3.390729-8.392053 10.935099-27.295364 7.374835-31.78808z"
                        fill="#f90"
                      />
                    </svg>
                    AWS
                  </p>
                  <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-blue-200">
                    <svg
                      className="mr-1 justify-center"
                      height="18"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 346"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m82.5539491 267.472524s-13.1984291 7.675345 9.3928727 10.272581c27.3687272 3.12227 41.3565672 2.674502 71.5170912-3.033832 0 0 7.929483 4.971985 19.003578 9.278371-67.611927 28.977338-153.0191128-1.678429-99.9135419-16.51712"
                        fill="#5382a1"
                      />
                      <path
                        d="m74.2921309 229.658996s-14.8033164 10.957731 7.8047418 13.296175c29.2361313 3.016145 52.3245383 3.262836 92.2763633-4.430196 0 0 5.525877 5.60221 14.214982 8.665832-81.746851 23.903884-172.798138 1.885091-114.2960871-17.531811"
                        fill="#5382a1"
                      />
                      <path
                        d="m143.941818 165.514705c16.659549 19.180451-4.377134 36.440437-4.377134 36.440437s42.30144-21.837266 22.874298-49.18272c-18.144349-25.501324-32.058647-38.171927 43.267723-81.8585602 0 0-118.2375559 29.5302982-61.764887 94.6008432"
                        fill="#e76f00"
                      />
                      <g fill="#5382a1">
                        <path d="m233.364015 295.441687s9.767098 8.047709-10.756655 14.273629c-39.026502 11.822546-162.4324655 15.392582-196.7141236.47104-12.3233746-5.361105 10.7864436-12.800931 18.0559127-14.362065 7.5813236-1.643986 11.9137745-1.337716 11.9137745-1.337716-13.7048436-9.654459-88.5825163 18.957032-38.0341527 27.150894 137.8527421 22.355782 251.2923931-10.066851 215.5352441-26.195782" />
                        <path d="m88.9008873 190.479825s-62.7721309 14.90944-22.2291782 20.323608c17.1184873 2.291898 51.2437529 1.773382 83.0305749-.889949 25.977949-2.19136 52.062952-6.85056 52.062952-6.85056s-9.160145 3.922851-15.787287 8.448c-63.744 16.764741-186.88558536 8.965585-151.4347054-8.182691 29.9808582-14.492393 54.3576437-12.848408 54.3576437-12.848408" />
                        <path d="m201.506444 253.422313c64.79872-33.671913 34.838341-66.030313 13.9264-61.670866-5.125586 1.066822-7.410968 1.991215-7.410968 1.991215s1.902779-2.980771 5.537048-4.271011c41.370531-14.544524 73.187141 42.897222-13.354822 65.647709 0 .000931 1.002589-.895535 1.302342-1.697047" />
                      </g>
                      <path
                        d="m162.438982.37143273s35.886545 35.89864727-34.036829 91.10062547c-56.0714475 44.2814838-12.786037 69.5295998-.023273 98.3766108-32.7298327-29.530298-56.7491491-55.525934-40.6351127-79.720262 23.6516077-35.5151125 89.1745747-52.7341379 74.6952147-109.75697427"
                        fill="#e76f00"
                      />
                      <path
                        d="m95.2683055 344.665367c62.1986905 3.981498 157.7118255-2.209047 159.9739345-31.639738 0 0-4.348276 11.156946-51.403869 20.017338-53.087884 9.990517-118.5643055 8.824088-157.3990401 2.421295.0009309-.000931 7.9499636 6.579665 48.8289746 9.201105"
                        fill="#5382a1"
                      />
                    </svg>
                    Java
                  </p>
                  <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-blue-400  ">
                    <Image className="w-4 mr-2  " src={PYTHON} alt="" />
                    Python
                  </p>
                  <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-orange-700  ">
                    <Image className="w-4 mr-2  " src={MATLAB} alt="" />
                    MATLAB
                  </p>
                  <p className="px-3 py-1 my-2 mr-2 flex items-center justify-center font-medium  rounded-2xl bg-indigo-400  ">
                    <Image className="w-4 mr-2  " src={C} alt="" />
                    CSharp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
