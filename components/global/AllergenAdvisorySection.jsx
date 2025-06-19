"use client";

import React from "react";
import { Heading, Text } from "..";

const AllergenAdvisorySection = ({ className }) => {
  return (
    <section
      className={`px-4 py-[4rem] md:py-[5rem] max-w-4xl mx-auto ${className}`}
    >
      {/* Title */}
      <Heading level="h1" className="text-center mb-2">
        Allergen & Ingredient
        <br />
        Advisory
      </Heading>
      <Text align="center" size="medium" className="mb-[3rem]">
        Effective date: June 15, 2025
      </Text>

      <div className="flex flex-col gap-[1rem]">
        {/* Opening Statement */}
        <Heading level="h2" size="lg" className="mb-4">
          We believe in clarity, always.
        </Heading>
        <Text weight="bold" className="mb-8">
          All Amma-Ma products are prepared with natural ingredients, but we
          advise checking allergen details carefully if you have specific
          sensitivities.
        </Text>

        {/* Contains Section */}
        <Heading level="h3" size="md" className="my-[1.5rem]">
          Contains:
        </Heading>
        <ul className="mb-6 list-disc list-inside text-[1rem] leading-relaxed text-[#333]">
          <li>Tree nuts (such as almonds, cashews, pistachios)</li>
          <li>Seeds (like flax seeds, sesame seeds)</li>
          <li>Milk (from pure ghee)</li>
        </ul>

        {/* May Contain Traces Of */}
        <Heading level="h3" size="md" className="my-[1.5rem]">
          May Contain Traces Of:
        </Heading>
        <ul className="mb-6 list-disc list-inside text-[1rem] leading-relaxed text-[#333]">
          <li>Peanuts</li>
          <li>Other nuts or allergens handled in the same kitchen</li>
        </ul>

        {/* Important Section */}
        <Heading level="h3" size="md" className="my-[1.5rem]">
          Important:
        </Heading>
        <Text className="mb-8">
          While we take great care to avoid cross-contamination, all Amma-Ma
          products are handmade in environments that may process nuts, seeds,
          dairy, and sesame.
        </Text>

        {/* Final Note */}
        <blockquote className="border-l-2 border-[#010303] pl-[1.5rem] italic text-[1.75rem] text-[#010303]">
          “If you have a serious allergy, please consult with us before placing
          an order.”
        </blockquote>
      </div>
    </section>
  );
};

export default AllergenAdvisorySection;
