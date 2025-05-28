// components/HeroFeatureSection.js

import Image from "next/image";
import { Button, Heading, Text } from "..";
import { SectionImage } from "@/public";

export default function HeroFeatureSection({ className = "" }) {
  return (
    <section className="px-4 md:px-8 bg-[#FFC06D]">
      <div
        className={`max-width-1200 flex flex-col md:flex-row items-center gap-[3rem] md:gap-[5rem] ${className}`}
      >
        {/* Text Content */}
        <div className="md:min-w-[38.5rem]">
          <Text
            size="regular"
            weight="semibold"
            className="text-[#000700] mb-[1rem]"
          >
            Tagline
          </Text>

          <Heading
            level="h2"
            align="left"
            className="mb-[1.25rem] md:mb-[1.5rem]"
          >
            Medium length section heading goes here
          </Heading>

          <Text size="medium" className="mb-[1.5rem] md:mb-[2.5rem]">
            {`Discover the delightful taste of our handcrafted sweets, made with
            natural ingredients. Experience guilt-free indulgence that’s perfect
            for any occasion!`}
          </Text>

          <div className="flex justify-start">
            <Button variant="outline" className="!border-black !text-black">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[375px] md:h-[640px] rounded-xl overflow-hidden">
          <Image
            src={SectionImage}
            alt="Handcrafted sweets"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
