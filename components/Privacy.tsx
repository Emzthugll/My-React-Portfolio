// components/PrivacyPolicyModal.tsx
import React, { useEffect } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    // Toggle the body scroll class based on modal state
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-md shadow-lg max-w-6xl  w-full mx-auto relative">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <div className="border-b-2 border-gray-300 mb-4"></div>
        <div
          className="prose dark:prose-invert overflow-y-auto my-4"
          style={{ maxHeight: "55vh" }}
        >
          {/* Your Privacy Policy content here */}
          <p>
            This Privacy Policy outlines how we collect, use, and protect your
            information when you interact with Alan Bacay's portfolio website.
            We are committed to safeguarding your privacy and ensuring the
            security of any personal information you provide while using this
            website.
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">
            Information we collect
          </h3>
          <p>
            When you use the contact form on our website, we may collect the
            following information:
          </p>
          <ul className="list-disc ml-7 mt-2 mb-4">
            <li>Name (optional)</li>
            <li>Email Address</li>
            <li>Message</li>
          </ul>
          <p>
            This information is collected solely for the purpose of
            communication and responding to your inquiries or messages.
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">
            Protection of Your Information
          </h3>
          <p>
            We are committed to ensuring the security and confidentiality of the
            information you provide. We take reasonable measures to prevent
            unauthorized access or disclosure of your information.
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">
            Sharing of Information
          </h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties. Your information is only used for
            communication purposes related to your inquiries or messages.
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">Your Consent</h3>
          <p>
            By using the contact form on our website, you consent to the terms
            outlined in this Privacy Policy.
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">
            Accessing or Updating Your Information
          </h3>
          <p>
            You have the right to access or update your personal information
            provided through the contact form. If you wish to access or modify
            this information, please contact me at{" "}
            <a
              href="mailto:marcjairus0111@gmail.com"
              className="text-accent text-blue-500  hover:underline"
            >
              marcjairus0111@gmail.com
            </a>
            .
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">
            Updates to This Privacy Policy
          </h3>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be reflected on this page.
          </p>
          <h3 className="text-2xl font-bold mt-5 mb-3">Contact Information</h3>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact me at{" "}
            <a
              href="mailto:marcjairus0111@gmail.com"
              className="text-accent text-blue-500  hover:underline"
            >
              marcjairus0111@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="border-b-2 border-gray-300 mb-10"></div>
        <div className="absolute bottom-4 right-4">
          <button
            onClick={onClose}
            className="bg-[#007bff] hover:bg-blue-600 text-white px-6 py-3 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
