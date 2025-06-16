"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Text } from "..";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function PhotoGridWithModal({ productDetails }) {
  const router = useRouter();
  const timerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [sliderRef, slider] = useKeenSlider(
    isMobile
      ? {
          loop: true,
          slides: { perView: 1, spacing: 16 },
          slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
          },
        }
      : null
  );

  // Optional autoplay on mobile
  useEffect(() => {
    if (isMobile && slider.current) {
      timerRef.current = setInterval(() => {
        slider.current.next();
      }, 5000); // 5 seconds autoplay
    }

    return () => clearInterval(timerRef.current);
  }, [slider, isMobile]);

  const handleRedirect = () => {
    router.push("/products");
  };

  return (
    <section className="py-[4rem] md:py-[6rem] px-4 md:px-10 max-w-7xl mx-auto w-full">
      {/* Breadcrumb */}
      <div className="flex gap-[1rem] items-center mb-[1.5rem]">
        <Text
          size="small"
          onClick={handleRedirect}
          className="cursor-pointer hover:underline"
        >
          Products
        </Text>
        <IoIosArrowForward className="w-[1rem] h-[1rem]" />
        <Text size="small" weight="semibold">
          {productDetails?.title}
        </Text>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 relative rounded-xl overflow-hidden w-full h-[35rem]">
        {productDetails?.photos?.map((src, index) => {
          const isMain = index === 0;
          return (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                isMain ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              } group cursor-pointer`}
            >
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Slider Layout */}
      {isMobile && (
        <>
          <div ref={sliderRef} className="keen-slider md:hidden w-full">
            {productDetails?.photos?.map((src, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="relative rounded-xl overflow-hidden group cursor-pointer h-[15rem] w-full">
                  <Image
                    src={src}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-1 mt-[1rem] md:hidden">
            {productDetails?.photos?.map((_, index) => (
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
        </>
      )}
    </section>
  );
}
