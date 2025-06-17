import React from "react";
import { Heading, Text } from "..";
import { HomeBackground } from "@/public";
import Image from "next/image";

const HeroSection = ({ isMobile }) => {
  return (
    <section className="relative w-full h-[38rem] md:h-[100rem] flex text-center">
      {/* Background Image */}
      <Image
        src={HomeBackground}
        alt="Background"
        fill
        className="absolute object-cover z-[-10]"
        quality={100}
        priority
      />

      <div className="w-full flex flex-col items-center text-center gap-[0.5rem] pt-[3rem] md:pt-[8rem] max-w-7xl mx-auto z-[10]">
        <Heading as={isMobile ? "h4" : "h1"} level={isMobile ? "h4" : "h1"}>
          Inspired by Grandmothers.
          <br /> Loved by Generations.
        </Heading>
        <Text
          size={isMobile ? "small" : "large"}
          className="mt-[0.5rem] md:mt-[1rem]"
          family={"libre"}
        >
          Your body will thank you - because what you
          <br /> eat should heal, not harm.
        </Text>

        {/* <div className="w-full max-w-full md:w-[40rem]">
          <Image
            src={LadduInBowl}
            alt="Background"
            className="object-contain z-0"
            quality={100}
            priority
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
