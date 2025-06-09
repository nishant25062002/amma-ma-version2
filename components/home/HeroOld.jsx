"use client";

import Image from "next/image";
import Heading from "../global/Heading";
import Button from "../global/Button";
import { HeroBackground } from "@/public";
import { Text } from "..";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100vh-4.6rem)] flex items-center justify-center text-white text-center">
      {/* Background Image */}
      <Image
        src={HeroBackground}
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000004f] z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center relative z-20 px-6 md:px-0 text-center"
      >
        <Heading
          level="h1"
          as="h1"
          align="center"
          color="text-white"
          className="md:w-[40rem] !font-[400] !text-white"
        >
          Indulge in Guilt-Free South Indian Sweets
        </Heading>

        <Text className="!text-white mt-[1.5rem] md:w-[46rem]">
          {`Discover the delightful taste of Amma-ma Foods’ sugar-free sweets,
          crafted with the finest dates and dry fruits. Experience a wholesome
          treat that nourishes your body without compromising on flavour.`}
        </Text>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center mt-[2rem]"
        >
          <Button className="!bg-white hover:!text-[#F9C000] !text-black font-semibold !hover:bg-gray-100 transition">
            Order Now
          </Button>

          {/* Optional secondary button */}
          {/* <Button className="!bg-transparent border border-white !text-white font-semibold !hover:bg-white !hover:text-black transition">
            Learn More
          </Button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
