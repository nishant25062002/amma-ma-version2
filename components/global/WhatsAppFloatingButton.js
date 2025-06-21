// components/WhatsAppFloatingButton.jsx

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "447442773435"; // no + or spaces

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-3 md:right-6 z-50 bg-[#25D366] text-white p-2 md:p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloatingButton;
