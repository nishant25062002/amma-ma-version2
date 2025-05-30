// components/HeroFeatureSection.js

import Image from "next/image";
import { Button, Heading, Text } from "..";
import { SectionImage } from "@/public";

export default function HeroFeatureSection({
  className = "",
  mainClass,
  title,
  heading,
  desc,
}) {
  return (
    <section className={"flex flex-col py-[3rem] md:py-[5rem] " + mainClass}>
      <div
        className={`max-width-1200 flex flex-col md:flex-row items-center px-4 md:px-8 gap-[3rem] md:gap-[5rem] ${className}`}
      >
        {/* Text Content */}
        <div className="md:min-w-[38.5rem]">
          <Text size="regular" weight="semibold" className="mb-[1rem]">
            {title}
          </Text>

          <Heading
            level="h3"
            align="left"
            className="mb-[1.25rem] md:mb-[1.5rem]"
          >
            {heading}
          </Heading>

          <Text size="medium" className="mb-[1.5rem] md:mb-[2.5rem]">
            {desc}
          </Text>

          <div className="flex justify-start">
            <Button variant="outline" className="!border-black !text-black">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[305px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={SectionImage}
            alt="Handcrafted sweets"
            fill
            className="object-cover"
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
