"use client";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Heading, Text } from "..";

const Faq = ({ faq, index }) => {
  const [show, setShow] = useState(false || index == 0);

  return (
    <div className="border border-black rounded-xl p-[1.3rem_1.5rem] w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <Heading
          as="h6"
          level="h6"
          family="inter"
          className="font-semibold text-[1rem]"
        >
          {faq.question}
        </Heading>
        {!show ? (
          <FaAngleDown className="text-xl" />
        ) : (
          <FaAngleUp className="text-xl" />
        )}
      </div>

      {show && <Text className="mt-[1rem]">{faq.answer}</Text>}
    </div>
  );
};

export default Faq;
