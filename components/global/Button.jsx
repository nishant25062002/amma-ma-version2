"use client";
import React from "react";

const Button = ({
  children = "Shop",
  className = "",
  variant = "solid", // 'solid' | 'outline'
  onClick = () => {},
  secondary = false,
  ...rest
}) => {
  // Tailwind styles based on variant
  const baseStyles =
    "font-inter font-[500] px-6 py-2 h-[40px] text-sm min-w-[5.2rem] rounded-[0.75rem] transition flex items-center justify-center cursor-pointer";

  const variants = {
    solid: secondary ? "bg-[#0C4539] text-white" : "bg-[#F9C000] text-white",
    outline: secondary
      ? "border-[2px] border-[#0C4539] text-[#0C4539] bg-transparent hover:bg-[#0C4539]/10"
      : "border-[2px] border-[#F9C000] text-[#F9C000] bg-transparent hover:bg-[#F9C000]/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
