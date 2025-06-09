"use client";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Faq = ({ faq, index }) => {
  const [show, setShow] = useState(false || index == 0);
  return (
    <div className="border border-black rounded-xl p-[1.3rem_1.5rem] w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p className="font-semibold text-[1rem]">{faq.question}</p>
        {!show ? (
          <FaAngleDown className="text-xl" />
        ) : (
          <FaAngleUp className="text-xl" />
        )}
      </div>

      {show && (
        <p className="text-sm text-gray-700 leading-relaxed mt-[1rem]">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default Faq;
