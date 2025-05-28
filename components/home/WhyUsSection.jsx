// components/WhyUsSection.jsx

import { Heading, Text, Button } from "@/components";
import { HeartIcon, ShieldIcon, UserIcon } from "@/public";
import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="py-[7rem] px-4 md:px-10 max-w-7xl mx-auto flex flex-col gap-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <Text weight="semibold" className="mb-[1rem] text-[#FFBF00]">
            Wholesome
          </Text>
          <Heading level="h2" className="text-[#0C4539]">
            Indulge in Guilt-Free
            <br />
            Sweetness Today
          </Heading>
        </div>

        {/* Right Side */}
        <div>
          <Text size="regular">
            Discover the joy of our sugar-free South Indian sweets, crafted with
            care using natural ingredients. Each bite is a celebration of
            health, packed with fibre and nutrition, ensuring you can indulge
            without compromise. Enjoy sweets that are not only delicious but
            also completely free from preservatives and refined sugars.
          </Text>
        </div>
      </div>

      {/* Icons + Reasons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
            <Image src={HeartIcon} width={30} height={30} />{" "}
          </div>
          <Heading level="h4" className="text-[#0C4539] mb-2">
            Why Choose Our
            <br />
            Sugar-Free Sweets?
          </Heading>
          <Text>
            Our sweets are sweetened naturally with dates and dry fruits.
          </Text>
        </div>

        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
            <Image src={ShieldIcon} width={30} height={30} />
          </div>
          <Heading level="h4" className="text-[#0C4539] mb-2">
            Packed with Nutrients
            <br />
            for a Healthier You
          </Heading>
          <Text>Experience the rich nutritional benefits in every bite.</Text>
        </div>

        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
            <Image src={UserIcon} width={30} height={30} />
          </div>
          <Heading level="h4" className="text-[#0C4539] mb-2">
            Crafted with Love and
            <br />
            Authentic Ingredients
          </Heading>
          <Text>Sourced directly from India, ensuring premium quality.</Text>
        </div>
      </div>

      <Button variant="outline" className="w-fit" secondary>
        Order Now
      </Button>
    </section>
  );
}
