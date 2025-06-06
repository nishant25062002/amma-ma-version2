"use client";

import Image from "next/image";
import { Button, Heading, Text } from "..";
import { motion } from "framer-motion";

export default function HeroFeatureSection({
  className = "",
  mainClass,
  title,
  heading,
  desc,
  reverse = false,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className={`flex flex-col py-[3rem] md:py-[5rem] ${mainClass}`}>
      <div
        className={`max-w-7xl mx-auto flex flex-col items-center px-4 md:px-8 gap-[3rem] md:gap-[5rem] w-full ${className} ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:min-w-[38.5rem]"
        >
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

          <Text
            size="medium"
            className="mb-[1.5rem] md:mb-[2.5rem]"
            dangerouslySetInnerHTML={{ __html: desc }}
          />

          <div className="flex justify-start">
            <Button variant="outline" className="!border-black !text-black">
              Shop Now
            </Button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-[1rem] bg-neutral-200 w-full min-w-[30rem] h-[20rem] md:h-[28rem] flex items-center justify-center overflow-hidden"
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
