// components/FeatureSection.js

import Image from "next/image";
import { Button, Heading, Text } from "..";
import { Laddu, Laddu2, Laddu3 } from "@/public";

const features = [
  {
    image: Laddu,
    title: "Medium length section heading goes here",
    description:
      "Our sweets are crafted with care, ensuring they are sugar-free and nutritious.",
  },
  {
    image: Laddu2,
    title: "Medium length section heading goes here",
    description:
      "Packed with essential nutrients, our sweets are a wholesome treat for everyone.",
  },
  {
    image: Laddu3,
    title: "Medium length section heading goes here",
    description:
      "We believe in purity, using only the finest ingredients for our sweets.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#E8F5E9] py-[4rem] md:py-[7rem] px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Text
          size="regular"
          weight="semibold"
          className="text-[#000700] mb-[1rem]"
        >
          Tagline
        </Text>

        <Heading level="h2" align="center" className="mt-[1rem] mb-4">
          Medium length section heading goes here
        </Heading>

        <Text size="medium" className="max-w-3xl mx-auto mt-[1.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="text-center flex flex-col gap-[1.5rem]">
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <Heading level="h4" align="center" className="">
              {item.title}
            </Heading>

            <Text size="regular" className="">
              {item.description}
            </Text>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-[5rem]">
        <Button variant="outline">Shop Now</Button>
      </div>
    </section>
  );
}
