import React, { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md'; // Android message icon

const MessageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the visibility of WhatsApp and Phone icons
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Message Icon Button */}
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all"
        aria-label="Message"
      >
        <MdMessage className="text-3xl" />
      </button>

      {/* WhatsApp and Phone Options */}
      <div
        className={`flex flex-col items-center space-y-4 transition-all duration-500 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } absolute bottom-20 left-0`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/7814073920"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        {/* Phone */}
        <a
          href="tel:7814073920"
          className="bg-gray-500 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition-all"
          aria-label="Phone"
        >
          <FaPhone className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default MessageButton;
