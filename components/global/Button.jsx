"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Button = ({
  children = "Shop",
  className = "",
  variant = "solid", // 'solid' | 'outline'
  href = "/contact-us", // configurable path
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(href);
  };

  // Tailwind styles based on variant
  const baseStyles =
    "font-inter font-[500] px-6 py-2 h-[40px] text-sm min-w-[5.2rem] rounded-[0.75rem] transition flex items-center justify-center cursor-pointer";

  const variants = {
    solid: "bg-[#F9C000] text-white",
    outline:
      "border-[2px] border-[#F9C000] text-[#F9C000] bg-transparent hover:bg-[#F9C000]/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleRedirect}
    >
      {children}
    </button>
  );
};

export default Button;
