// components/WhyUsSection.jsx

"use client";

import { Heading, Text, Button } from "@/components";
import { HeartIcon, ShieldIcon, UserIcon } from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  return (
    <section className="py-[4rem] md:py-[7rem] px-4 md:px-10 max-w-7xl mx-auto flex flex-col gap-[3rem] md:gap-[5rem]">
      {/* Header and Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]"
      >
        {/* Left Side */}
        <div>
          <Text weight="semibold" className="mb-[1rem] text-[#FFBF00]">
            Wholesome
          </Text>
          <Heading level="h2">
            Indulge in Guilt-Free
            <br />
            Sweetness Today
          </Heading>
        </div>

        {/* Right Side */}
        <div className="md:pl-[3.75rem]">
          <Text size="medium">
            Discover the joy of our sugar-free South Indian sweets, crafted with
            care using natural ingredients. Each bite is a celebration of
            health, packed with fibre and nutrition, ensuring you can indulge
            without compromise. Enjoy sweets that are not only delicious but
            also completely free from preservatives and refined sugars.
          </Text>
        </div>
      </motion.div>

      {/* Icons + Reasons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem]"
      >
        {[
          {
            icon: HeartIcon,
            title: (
              <>
                Why Choose Our <br /> Sugar-Free Sweets?
              </>
            ),
            text: "Our sweets are sweetened naturally with dates and dry fruits.",
          },
          {
            icon: ShieldIcon,
            title: (
              <>
                Packed with Nutrients <br /> for a Healthier You
              </>
            ),
            text: "Experience the rich nutritional benefits in every bite.",
          },
          {
            icon: UserIcon,
            title: (
              <>
                Crafted with Love and <br /> Authentic Ingredients
              </>
            ),
            text: "Sourced directly from India, ensuring premium quality.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-[1rem] md:gap-[1.5rem]"
          >
            <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem]">
              <Image src={item.icon} alt="Icon" width={30} height={30} />
            </div>
            <Heading level="h4" className="text-[#0C4539] mb-2">
              {item.title}
            </Heading>
            <Text>{item.text}</Text>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button variant="outline" className="w-fit" secondary>
          Order Now
        </Button>
      </motion.div>
    </section>
  );
}
