import { TbPointFilled } from "react-icons/tb";
import React from "react";
import { Laddu } from "@/public";
import { Heading } from "..";
import Image from "next/image";

export const benefitHighlights = [
  {
    title: "Super Seeds",
    points: ["Heart Health", "Omega Boost"],
    image: Laddu,
  },
  {
    title: "Pure Ingredients",
    points: ["No Sugar Added", "100% Natural"],
    image: Laddu,
  },
  {
    title: "Healthy Indulgence",
    points: ["Guilt-free Pleasure", "Energy & Wellness"],
    image: Laddu,
  },
];

const SuperSeedsCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <div className="w-[15rem] h-[15rem] rounded-full border-[4px] border-[#D4A850] overflow-hidden relative">
        <Image
          src={data.image}
          alt="Super Seeds"
          className="absolute object-cover"
        />
      </div>

      <Heading as="h4" level="h4" className="mt-[1.5rem]">
        {data.title}
      </Heading>

      <ul className="flex flex-col text-[#0C4539] mt-[0.5rem]">
        {data.points.map((point, index) => (
          <Heading as="h6" level="h6" className="flex items-center" key={index}>
            <TbPointFilled className="mr-2" />
            {point}
          </Heading>
        ))}
      </ul>
    </div>
  );
};

const HeroSectionExtend = () => {
  return (
    <section className="hero-gradient w-full">
      <div className="w-full flex flex-col items-center justify-center text-center gap-[0.5rem] pt-[1rem] md:pb-[8rem] max-w-5xl mx-auto">
        <div className="flex items-center gap-[2rem] w-full">
          <div className="bg-[#D4A850] w-1/3 h-[0.25rem] rounded-4xl" />
          <Heading>Our Offerings</Heading>
          <div className="bg-[#D4A850] w-1/3 h-[0.25rem] rounded-4xl" />
        </div>

        <div className="flex flex-col gap-[4rem] items-center md:flex-row md:justify-between pt-[4rem]">
          {benefitHighlights.map((data, index) => (
            <SuperSeedsCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionExtend;
