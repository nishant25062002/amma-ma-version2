"use client";

import { Heading, Text } from "@/components";
import { FaCube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CommunityAudienceSection() {
  return (
    <section className="py-[4rem] md:py-[7rem] px-4 md:px-10 max-w-7xl mx-auto flex flex-col gap-[3rem] md:gap-[5rem]">
      {/* Heading and Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]"
      >
        {/* Left Side */}
        <div>
          <Text weight="semibold" className="mb-[1rem] text-[#FFBF00]">
            Nourishing
          </Text>
          <Heading level="h3">
            Who We Make These For : <br />
            Nourishing Stories of Our Community
          </Heading>
        </div>

        {/* Right Side */}
        <div className="pl-[3.75rem]">
          <Text size="regular">
            At Amma-ma Foods, we believe in creating sweets that cater to the
            diverse needs of our community. Our handcrafted treats are designed
            for those who seek nourishment without compromise. Each bite is a
            reminder of home, crafted with love and care.
          </Text>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem]"
      >
        {/* Card 1 */}
        <div className="flex flex-col gap-[1rem] md:gap-[1.5rem]">
          <FaCube className="text-black text-[1.75rem]" />
          {/* <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
            <Image src={HeartIcon} width={30} height={30} />{" "}
          </div> */}
          <Heading level="h5">The Student Skipping Meals</Heading>
          <Text>
            For the student on the go, our sweets provide essential energy and
            nutrition.
          </Text>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-[1rem] md:gap-[1.5rem]">
          <FaCube className="text-black text-[1.75rem]" />
          {/* <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
            <Image src={HeartIcon} width={30} height={30} />{" "}
          </div> */}
          <Heading level="h5">The Busy Young Professional</Heading>
          <Text>
            Our treats are the perfect guilt-free snack for busy professionals
            seeking balance.
          </Text>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-[1rem] md:gap-[1.5rem]">
          <FaCube className="text-black text-[1.75rem]" />
          {/* <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
            <Image src={HeartIcon} width={30} height={30} />{" "}
          </div> */}
          <Heading level="h5">
            The Nostalgic Soul Missing <br /> Indian Comfort Food
          </Heading>
          <Text>
            For those yearning for a taste of home, our sweets evoke cherished
            memories.
          </Text>
        </div>
      </motion.div>
    </section>
  );
}
