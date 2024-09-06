"use client";
import React, { useState } from "react";
import PrivacyPolicyModal from "./Privacy"; // Import the modal

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(""); // State for handling status messages

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Your message has been sent successfully!");
      } else {
        setStatus("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setStatus("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div
        id="contact"
        className="min-h-screen py-8 sm:py-16 px-4 sm:px-8 z-10"
      >
        <div className="flex flex-col items-center justify-center w-full mb-10">
          <h1
            className="text-3xl lg:text-4xl  text-black font-bold mt-5 md:mb-6 sm:text-5xl rounded-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 dark:text-white"
            style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
          >
            Contact
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 rounded-lg p-6 sm:p-8 mx-auto max-w-6xl font-[sans-serif] w-full border border-gray-200 dark:border-gray-500  bg-gradient-to-r from-purple-400 to-indigo-400 dark:text-white"
          style={{ boxShadow: " 0 4px 6px rgb(0,0,255,0.6)" }}
        >
          <div>
            <h2 className="text-black-100 dark:text-white text-3xl font-extrabold mb-4">
              Let&#39;s Talk
            </h2>
            <p className="text-sm dark:text-white mb-6">
              I&#39;d love to hear from you&apos; Whether you need help with
              development, design, or just want to brainstorm, feel free to
              reach out. Let&#39;s turn your vision into reality together&apos;
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
            <input
              type="hidden"
              name="apikey"
              value="e4fa95c8-325f-4ca4-bc31-92aaa14fea37"
            />
            <div className="flex flex-col sm:flex-row gap-4 ">
              <input
                type="text"
                name="first_name"
                className="border dark:bg-gray-700  rounded-md px-4 py-2    w-full max-w-5xl"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last_name"
                className="border dark:bg-gray-700  rounded-md px-4 py-2 w-full  max-w-5xl"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              className="border dark:bg-gray-700  rounded-md px-4 py-2 w-full max-w-5x"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              rows={4}
              className="border dark:bg-gray-700  rounded-md px-4 py-2 mt-2 w-full max-w-5xl"
              placeholder="Your Message"
              required
            ></textarea>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="privacy_policy"
                id="privacy_policy"
                className="form-checkbox"
                required
              />
              <label
                htmlFor="privacy_policy"
                className="ml-2 text-sm text-gray-500 dark:text-gray-400"
              >
                I agree to the{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="text-[#007bff] hover:underline"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#007bff] text-white rounded-md px-4 py-2 mt-4 transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p
              className={`text-sm mt-4 ${
                status.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Contact;
