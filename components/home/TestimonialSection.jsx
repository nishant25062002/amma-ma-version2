"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Heading, TestimonialCard, Text } from "..";

const testimonials = [
  {
    name: "Anita Rao",
    position: "Health Blogger",
    avatar: "https://avatars.githubusercontent.com/u/80949652?v=4",
    content:
      "These sweets are an absolute blessing! Guilt-free, nutrient-rich, and bursting with traditional flavor - Amma-Ma is now a part of my daily routine.",
  },
  {
    name: "Rajesh Kumar",
    position: "Fitness Enthusiast",
    avatar: "https://avatars.githubusercontent.com/u/80949652?v=4",
    content:
      "These sweets are an absolute blessing! Guilt-free, nutrient-rich, and bursting with traditional flavor - Amma-Ma is now a part of my daily routine.",
  },
  {
    name: "Arjun Mehta",
    position: "Certified Fitness Coach",
    avatar: "https://avatars.githubusercontent.com/u/80949652?v=4",
    content:
      "These sweets are an absolute blessing! Guilt-free, nutrient-rich, and bursting with traditional flavor - Amma-Ma is now a part of my daily routine.",
  },
  {
    name: "Nishant Mainwal",
    position: "Software Engineer",
    avatar: "https://avatars.githubusercontent.com/u/80949652?v=4",
    content:
      "These sweets are an absolute blessing! Guilt-free, nutrient-rich, and bursting with traditional flavor - Amma-Ma is now a part of my daily routine.",
  },
];

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 24 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 32 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    []
  );

  const slidePrev = () => instanceRef.current?.prev();
  const slideNext = () => instanceRef.current?.next();
  const goToSlide = (i) => instanceRef.current?.moveToIdx(i);

  return (
    <section
      className="py-[4rem] md:py-[7rem] px-4 md:px-8 relative"
      id="reviews"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Heading level="h2" align="center" className="mb-4">
          See Why Everyone's Talking <br /> About Amma-Ma
        </Heading>
        <Text size="medium" className="max-w-2xl mx-auto ">
          "Warning: reading these reviews might cause sweet cravings."
        </Text>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Arrow Buttons */}
        <button
          onClick={slidePrev}
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-[#f1f1f1] shadow hover:bg-gray-100 transition hidden lg:block"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          onClick={slideNext}
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-[#f1f1f1] shadow hover:bg-gray-100 transition hidden lg:block"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="keen-slider__slide">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === idx
                  ? "bg-[#018A00]"
                  : "bg-gray-400 opacity-50 hover:opacity-80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
