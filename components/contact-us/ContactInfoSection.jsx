"use client";

import { scrollToId } from "@/lib/scrollToId";
import { Heading, Text } from "..";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

export default function ContactInfoSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const segments = pathname.split("/").filter(Boolean);
      const id = segments[segments.length - 1];
      scrollToId(id);
    }
  }, []);

  const InfoData = [
    {
      icon: <HiOutlineMail className="text-xl" />,
      text: "Email",
      value: "info@amma-mafoods.com",
      link: (
        <a
          href="mailto:info@amma-mafoods.com"
          className="text-[1rem] leading-[150%] text-black font-inter underline"
        >
          info@amma-mafoods.com
        </a>
      ),
    },
    {
      icon: <HiOutlinePhone className="text-xl" />,
      text: "Phone",
      value: "Call us anytime",
      link: (
        <a
          href="tel:+442012345678"
          className="text-[1rem] leading-[150%] text-black font-inter underline"
        >
          +44 20 1234 5678
        </a>
      ),
    },
    {
      icon: <HiOutlineLocationMarker className="text-xl" />,
      text: "Email",
      value: "456 Sweet Lane, London, UK",
      link: (
        <a
          href="https://www.google.com/maps"
          target="_blank"
          className="text-sm font-semibold flex items-center gap-1 text-black underline"
        >
          Get Directions <IoIosArrowForward className="text-md pl-1" />
        </a>
      ),
    },
  ];
  return (
    <section
      className="py-[4rem] md:py-[6rem] px-4 md:px-10 max-w-7xl mx-auto"
      id="contact-info"
    >
      <div className="flex flex-col gap-[3rem] md:gap-[5rem] items-start">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Text
            size="small"
            weight="semibold"
            className="mb-[0.5rem] md:mb-[1rem]"
          >
            Connect
          </Text>
          <Heading level="h2" className="mb-[1rem] md:mb-[1.5rem]">
            Contact Us
          </Heading>
          <Text>We'd love to hear from you!</Text>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[2rem] items-center justify-center w-full">
          <motion.div
            className="flex flex-col w-full max-w-[25rem] gap-[2.5rem]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {InfoData.map((data, index) => (
              <div key={index} className="flex flex-col gap-[0.5rem]">
                <Heading as="h6" level="h6" className="flex items-center gap-2">
                  {data.icon}
                  {data.text}
                </Heading>
                <Text> {data.value}</Text>
                {data.link}
              </div>
            ))}
          </motion.div>

          {/* Right Side - Map Image */}
          <motion.div
            className="flex-1 relative overflow-hidden w-full max-w-[50rem] mt-[1rem] md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.659384036252!2d0.05241628230126243!3d51.57708548368927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6e76b9d1443%3A0xd83c889214302dfc!2s4%20Windermere%20Gardens%2C%20Ilford%20IG4%205BZ%2C%20UK!5e0!3m2!1sen!2sin!4v1748858415453!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", borderRadius: "12px" }}
              height={500}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
