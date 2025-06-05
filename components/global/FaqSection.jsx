// components/FaqSection.jsx
"use client";

import { useState } from "react";
import { Heading, Text } from "@/components";
import { IoClose } from "react-icons/io5";

const faqData = [
  {
    question: "What is the shelf life?",
    answer:
      "Our sugar-free sweets have a shelf life of approximately three months when stored correctly. Keep them in a cool, dry place away from direct sunlight. For the best taste, consume them within the first month.",
  },
  {
    question: "How should I store?",
    answer:
      "Store our sweets in an airtight container to maintain freshness. A cool, dry environment is ideal for preserving their texture and flavour. Avoid refrigeration, as it may alter the consistency.",
  },
  {
    question: "Are there allergens present?",
    answer:
      "Our sweets are made with natural ingredients, but they may contain nuts and dried fruits. Always check the ingredient list for specific allergen information. If you have allergies, please consult with us before consumption.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState(faqData.map((_, i) => i));

  const toggleIndex = (index) => {
    setOpenIndexes((prev) => prev.filter((i) => i !== index));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-[5rem]">
      <Heading level="h2" align="center" className="mb-[1rem]">
        FAQs
      </Heading>
      <Text align="center" className="mb-[3rem]">
        Find answers to your questions about our sugar-free sweets and how to
        enjoy them.
      </Text>

      <div className="flex flex-col gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-black rounded-xl p-5 relative"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="absolute top-4 right-4 text-xl"
            >
              <IoClose />
            </button>

            <p className="font-semibold mb-2 text-[1rem]">{faq.question}</p>
            {openIndexes.includes(index) && (
              <p className="text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
