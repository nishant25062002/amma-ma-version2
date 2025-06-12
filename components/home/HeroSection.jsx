import React from "react";
import { Heading, Text } from "..";
import { LadduInBowl } from "@/public";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-gradient w-full">
      <div className="w-full flex flex-col items-center justify-center text-center gap-[0.5rem] pt-[1rem] md:pt-[8rem] max-w-7xl mx-auto">
        <Heading as="h1" level="h1">
          Inspired by Grandmothers.
          <br /> Loved by Generations.
        </Heading>
        <Text className="mt-[1.5rem]">
          Your body will thank you - because what you
          <br /> eat should heal, not harm.
        </Text>

        <div className="w-full max-w-full md:w-[40rem]">
          <Image
            src={LadduInBowl}
            alt="Background"
            className="object-contain z-0"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
