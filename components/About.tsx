import React from "react";
import web from "../components/assets/web.png";
import mobile from "../components/assets/mobile.png";
import backend from "../components/assets/backend.png";
import { StaticImageData } from "next/image"; // Import StaticImageData type

// Define your services data
const services = [
  {
    title: "Front-End Development",
    description:
      "Front-end web development adopting new frameworks to satisfy changing needs and keep up with trends. Ensuring browser compatibility, visually appealing and user-friendly interfaces.",
    icon: web,
  },
  {
    title: "Responsive Design",
    description:
      "Implement responsive design principles, ensuring that websites and web applications adapt seamlessly to different devices and screen sizes for an optimal user experience.",
    icon: mobile,
  },
  {
    title: "Backend Development",
    description:
      "Backend leveraging modern approaches, ensure scalability, security, and seamless communication with front-end interfaces, meeting the evolving needs of today's web applications.",
    icon: backend,
  },
];

// Define the props interface for ServiceCard
interface ServiceCardProps {
  title: string;
  icon: StaticImageData; // Change the type to StaticImageData
  description: string; // Add description to props
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
}) => (
  <div className="sm:w-[357px]">
    {" "}
    {/* Adjusted width for responsive design */}
    <div className="w-full mx-auto z-40">
      <div
        className="w-full border-2 border-blue-600 bg-blue-950 green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-transform duration-300 hover:scale-105"
        data-aos="fade-right"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon.src} // Use icon.src to access the image source
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-poppins font-bold text-center mt-2">
            {title}
          </h3>
          {/* Add the description below the title */}
          <p className="text-gray-400 font-poppins text-sm text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#030014]">
      <div className="h-full w-full mx-auto px-4 relative flex items-center justify-center z-40">
        <div className="w-full max-w-[1200px] mx-auto text-text dark:text-darkText z-50">
          <div
            className="flex flex-col items-start justify-center w-full mb-10"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="border-4 py-3 px-4 border-indigo-600 text-3xl lg:text-6xl font-poppins font-extrabold mt-20 text-white">
              About Me
            </h1>
          </div>
          <div className="grid md:grid-cols-3 md:gap-5 justify-center items-start">
            <div
              className="md:col-span-2 paragraph mb-10 text-lg text-white"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="mb-3 text-gray-400 font-poppins">
                I am <span className="font-bold">MJ</span>, a passionate and
                forward-thinking web developer dedicated to staying at the
                forefront of technology trends. Committed to continuous
                learning, I eagerly explore new frameworks, libraries, and tools
                to enhance my skill set and deliver innovative solutions.
              </p>
            </div>
          </div>
          {/* Service Boxes Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {" "}
            {/* Set a gap for spacing */}
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                description={service.description} // Pass the description prop
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
