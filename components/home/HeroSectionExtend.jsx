import { TbPointFilled } from "react-icons/tb";
import React from "react";
import { Nuts, Ragi, UradDal } from "@/public";
import { Heading, Text } from "..";
import Image from "next/image";

export const benefitHighlights = [
  {
    title: "Ancient Super Grain",
    points: [
      "Tradition-backed nourishment for strength and vitality. Urad dal is a time-honoured super grain, rich in plant-based protein, fiber, and iron. It supports muscle growth, gut health, and sustained energy levels, making it a perfect base for wholesome sweets.",
    ],
    image: UradDal,
  },
  {
    title: "Ragi (Finger Millet)",
    points: [
      "Ancient seeds of strength, balance, and immunity. One of the most powerful ancient grains—rich in calcium, iron, and fiber. Ragi strengthens bones, aids digestion, and fuels the body with lasting energy.",
    ],
    image: Ragi,
  },
  {
    title: "Nuts & Seeds",
    points: [
      "A nourishing blend crafted for modern wellness. Our signature mix of almonds, pistachios, flax seeds, dates, pumpkin, and more delivers a powerhouse of vitamins, minerals, healthy fats, and antioxidants - designed to fuel your body, sharpen your mind, and satisfy guilt-free cravings.",
    ],
    image: Nuts,
  },
];

const SuperSeedsCard = ({ data, isMobile }) => {
  return (
    <div className="flex flex-col items-center rounded-lg w-full">
      <div className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] rounded-full border-[4px] border-[#D4A850] overflow-hidden relative">
        <Image
          src={data.image}
          alt="Super Seeds"
          className="absolute object-cover"
          fill
        />
      </div>
      <div className="flex flex-col w-full text-start">
        <Heading
          as={isMobile ? "h6" : "h4"}
          level={isMobile ? "h6" : "h4"}
          className="w-full mt-[1.5rem] flex min-h-[3rem]"
        >
          {data.title}
        </Heading>

        {/* <ul className="flex flex-col text-[#0C4539] mt-[0.5rem]"> */}
        {data.points.map((point, index) => (
          <Text
            key={index}
            size={isMobile ? "small" : "regular"}
            className="flex text-[#0C4539] w-full md:min-h-[16rem]"
          >
            {/* <TbPointFilled className="mr-2" /> */}
            {point}
          </Text>
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

const HeroSectionExtend = ({ isMobile }) => {
  return (
    <section className="hero-gradient-extend w-full">
      <div className="w-full flex flex-col items-center justify-center text-center gap-[0.5rem] pt-[5rem] pb-[5rem] md:pb-[8rem] max-w-6xl mx-auto">
        <div className="flex items-center gap-[0.5rem] md:gap-[2rem] w-full justify-center">
          <div className="bg-[#D4A850] w-1/5 md:w-1/4 h-[0.25rem] rounded-4xl" />
          <Heading as={isMobile ? "h4" : "h2"} level={isMobile ? "h4" : "h2"}>
            Our Offerings
          </Heading>
          <div className="bg-[#D4A850] w-1/5 md:w-1/4 h-[0.25rem] rounded-4xl" />
        </div>

        <div className="flex flex-col gap-[4rem] md:gap-[2rem] items-center md:flex-row md:justify-between pt-[4rem] px-4">
          {benefitHighlights.map((data, index) => (
            <SuperSeedsCard key={index} data={data} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionExtend;
