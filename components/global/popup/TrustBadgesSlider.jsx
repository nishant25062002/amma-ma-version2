"use client";

import React, { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Heading, Text } from "@/components";

const badges = [
  {
    title: "100% Natural Ingredients",
    desc: "Made only with dry fruits, seeds, jaggery, and pure ghee.",
  },
  {
    title: "No Refined Sugar",
    desc: "Naturally sweetened with dates. Nothing artificial.",
  },
  {
    title: "Handcrafted with Love",
    desc: "Every laddoo is handmade in small, mindful batches.",
  },
  {
    title: "Made in the UK",
    desc: "Freshly crafted locally, inspired by Indian tradition.",
  },
  {
    title: "Secure Checkout",
    desc: "Your payment and data are always protected.",
  },
  {
    title: "Fast UK Shipping",
    desc: "Quick delivery, because your wellness shouldn't wait.",
  },
  {
    title: "Eco-Friendly Packaging",
    desc: "Minimal, recyclable materials that care for the planet.",
  },
  {
    title: "5-Star Rated",
    desc: "Loved and trusted by customers across the UK.",
  },
  {
    title: "Inspired by Grandmothers' Wisdom",
    desc: "A legacy of nourishment, passed from generation to generation.",
  },
];

const TrustBadgesSlider = () => {
  const timerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 3000); // 3 seconds autoplay

    return () => clearInterval(timerRef.current);
  }, [slider]);

  return (
    <section className="py-[3rem] md:py-[5rem] px-4 hero-gradient">
      <div className="max-w-7xl mx-auto flex flex-col items-centers">
        <Heading level="h4" align="center">
          Amma-Ma Trust Badges
        </Heading>
        <div ref={sliderRef} className="keen-slider mt-[2.5rem]">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded-xl shadow-md flex flex-col items-center"
            >
              <Heading level="h6" className="mb-[1rem]">
                {badge.title}
              </Heading>
              <Text>{badge.desc}</Text>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center items-center gap-1 mt-[2rem]">
          {badges.map((_, index) => (
            <button
              key={index}
              onClick={() => slider.current?.moveToIdx(index)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index
                  ? "bg-[#0C4539] w-[0.5rem] h-[0.5rem]"
                  : "bg-[#0C4539]/30 hover:bg-[#0C4539]/50 w-[0.4rem] h-[0.4rem]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSlider;
