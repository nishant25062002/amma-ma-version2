// components/SplitFeatureSection.jsx

"use client";

import { Heading, Text } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplitFeatureSection({
  title,
  description,
  points = [],
  imageSrc,
  imageAlt = "Section image",
  reverse = false,
  mainClass = "",
  className,
}) {
  return (
    <section
      className={"flex flex-col py-[3rem] md:py-[5rem] w-full " + mainClass}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col items-center px-4 md:px-8 gap-[3rem] md:gap-[5rem] w-full ${className} ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:min-w-[38.5rem]"
        >
          <Heading
            level="h3"
            align="left"
            className="mb-[1.25rem] md:mb-[1.5rem]"
          >
            {title}
          </Heading>

          <Text size="medium" className="mb-[1.5rem] md:mb-[2.5rem]">
            {description}
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
            {points.map((point, i) => (
              <div key={i}>
                <Heading
                  level="h5"
                  className="mb-[0.5rem] text-[1.25rem] leading-[1.75rem] "
                >
                  {point.heading}
                </Heading>
                <Text>{point.text}</Text>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-[1rem] bg-neutral-200 w-full h-[20rem] md:h-[28rem] flex items-center justify-center overflow-hidden"
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="absolute object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm max-w-full w-[40rem]">
              Image Placeholder
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
