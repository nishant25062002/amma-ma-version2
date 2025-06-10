import React from "react";
import { Heading, Text } from "..";
import { Laddu, LadduInBowl } from "@/public";
import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";
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

const HeroSection = () => {
  return (
    <section className="hero-gradient w-full">
      <div className="w-full flex flex-col items-center justify-center text-center gap-[0.5rem] pt-[8rem] pb-[5rem] max-w-7xl mx-auto">
        <Heading as="h1" level="h1">
          Inspired by Grandmothers.
          <br /> Loved by Generations.
        </Heading>
        <Text className="mt-[1.5rem]">
          Your body will thank you - because what you
          <br /> eat should heal, not harm.
        </Text>

        <div className="relative h-[30rem] w-[40rem]">
          <Image
            src={LadduInBowl}
            alt="Background"
            fill
            className="absolute object-cover z-0"
            quality={100}
            priority
          />
        </div>

        {/* Extend Hero */}

        <div className="pt-[3rem]">
          <div className="flex items-center gap-[2rem]">
            <div className="bg-[#D4A850] w-[18rem] h-[0.25rem] rounded-4xl" />
            <Heading>Our Offerings</Heading>
            <div className="bg-[#D4A850] w-[18rem] h-[0.25rem] rounded-4xl" />
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between pt-[4rem]">
            {benefitHighlights.map((data, index) => (
              <SuperSeedsCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
