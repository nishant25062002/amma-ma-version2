"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laddu } from "@/public"; // Replace with actual image path
import { Button, Heading, Text } from "..";

export default function ContactSection() {
  return (
    <section className="py-[4rem] md:py-[6rem] px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex md:flex-row items-center justify-between gap-[3rem]">
        {/* Text Block */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Heading level="h2" className="mb-[1.5rem]">
            Get in Touch with
            <br />
            Amma-ma Foods
          </Heading>

          <Text size="regular" className="mb-[2rem] max-w-[36rem]">
            {`We’re here to answer your questions and help you discover our
            delightful range of sugar-free South Indian sweets. Reach out to us
            for any inquiries or assistance with your orders.`}
          </Text>

          <div className="flex flex-wrap gap-4">
            <Button variant="solid" color="green" secondary>
              Submit
            </Button>
            <Button variant="outline" color="green" secondary>
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="flex-1 w-full h-[30.5rem] md:h-[32.5rem] rounded-[1rem] overflow-hidden relative hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={Laddu} // 👈 Replace this with your imported contact image
            alt="Contact Amma-ma"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
