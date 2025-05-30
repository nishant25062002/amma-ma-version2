// components/MissionSection.jsx

"use client";

import { Heading, Text, Button } from "..";
// import { FaCube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Laddu4 } from "@/public";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-[4rem] md:py-[7rem] px-4 md:px-10 max-w-7xl mx-auto flex flex-col gap-[3rem] md:gap-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]"
      >
        {/* Left */}
        <div>
          <Text weight="semibold" className="mb-[1rem] text-[#FFBF00]">
            Mission
          </Text>
          <Heading
            level="h3"
            className="mb-[1.5rem] text-[2.25rem] leading-[2.8rem]"
          >
            Our Mission: Real Food
            <br />
            for Real Lives
          </Heading>
        </div>

        {/* Right */}
        <div className="pl-[3.75rem] flex flex-col gap-[2rem]">
          <Text>
            At Amma-ma Foods, we believe in nourishing lives with wholesome
            ingredients. Our mission is to provide delicious, sugar-free sweets
            that support your health and well-being.
          </Text>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3rem]">
            {[
              {
                title: "Nutritious Choices",
                desc: "Protein-packed goodness from our selection of premium nuts.",
              },
              {
                title: "Natural Sweetness",
                desc: "Enjoy the rich, natural sweetness derived from dates in every bite.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-[0.66rem] md:gap-[1rem]"
              >
                {/* <FaCube className="text-black text-[1.25rem]" /> */}
                <Heading level="h4">{item.title}</Heading>
                <Text>{item.desc}</Text>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-[0.5rem]">
            <Button variant="solid" secondary>
              Explore
            </Button>
            <Button
              variant="text"
              className="text-[#0C4539] underline flex items-center gap-[0.25rem]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Image Placeholder (animated) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="relative rounded-xl w-full h-[18rem] md:h-[25rem] flex items-center justify-center text-gray-500 text-[0.875rem] overflow-hidden"
      >
        <Image src={Laddu4} alt="Image" className="object-cover" />
      </motion.div>
    </section>
  );
}
