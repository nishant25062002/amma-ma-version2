import React from "react";
import { Heading, Text } from "..";

const DescriptionSection = () => {
  return (
    <section className="bg-[#FBDA9A]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-[1rem] py-[3rem] md:py-[7rem] px-4">
        <Text size="regular" weight="semibold" className="text-[#000700]">
          Our Story
        </Text>
        <Heading level="h1" align="center" className="mb-[0.5rem]">
          The Amma-Ma Story
        </Heading>
        <Heading level="h5">
          {`When I moved to London, I didn’t just pack bags—I carried the weight
          of memories, especially the tender ones. Amma pressing warm laddoos
          into my hands wasn’t just about dessert—it was her way of saying “I
          see you, I care, I’m here.” Those sweet, nourishing bites were more
          than food; they were love you could taste. But in this fast-paced
          life, I saw a different reality—students skipping meals, parents
          surviving on quick fixes, and families too tired to cook. Not by
          choice, but because life keeps moving, even when we’re running on
          empty.`}
          <br />
          <br />
          {`That’s why I created Amma-Ma—to bring back that feeling of
          being cared for. Each laddoo is handmade with purpose: protein-rich
          nuts, naturally sweet dates, iron-packed seeds, and fiber-filled
          ragi—everything your body craves without the sugar crash. For the
          student chasing deadlines. For the mother holding it all together. For
          the father trying to snack smarter. For anyone seeking nourishment
          that feels like home. `}
          <br />
          <br />
          {`Amma-Ma isn’t just a sweet—it’s a hug from home, wrapped in nutrition.`}
          <br />
          <br />
        </Heading>
        <Heading level="h5" align="right" className="w-full">
          - With Love ❤️ Amma-ma
        </Heading>
      </div>
    </section>
  );
};

export default DescriptionSection;
