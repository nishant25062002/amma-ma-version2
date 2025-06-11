// PhotoGridWithModal.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { Text } from "..";
import { useRouter } from "next/navigation";

export default function PhotoGridWithModal({ productDetails }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const handleRedirect = () => {
    router.push("/products");
  };

  const openModal = (img) => {
    setActivePhoto(img);
    setIsOpen(true);
  };

  return (
    <section className="py-[4rem] md:py-[6rem] px-4 md:px-10 max-w-7xl mx-auto">
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
      <div className="grid grid-cols-4 grid-rows-2 gap-2 relative rounded-xl overflow-hidden h-[35rem]">
        {productDetails?.photos?.map((src, index) => {
          const isMain = index === 0;
          return (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden  ${
                isMain ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              } group cursor-pointer`}
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {index === 4 && (
                <div className="absolute bottom-2 right-2 z-10">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-sm font-medium px-4 py-1.5 rounded-full border border-black bg-white hover:bg-gray-100 transition"
                  >
                    Show all photos
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#202020dc] flex items-center justify-center w-full h-full z-50 p-[2rem_5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <div className="relative rounded-xl shadow-lg flex justify-center w-full h-full overflow-scroll bg-amber-50">
              <Image
                src={activePhoto}
                alt={`Full view ${activePhoto}`}
                className="absolute"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
