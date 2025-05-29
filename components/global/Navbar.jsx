"use client";

import { navData } from "@/data/global";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Logo } from "@/public";

const AnimatedMenuIcon = ({ isOpen = false, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-7 h-5 flex flex-col justify-between items-end group md:hidden"
    >
      <span
        className={`block h-[2px] w-full bg-[#fff] rounded-sm transform transition duration-300 ease-in-out 
        ${isOpen ? "rotate-45 translate-y-2" : ""}`}
      ></span>
      <span
        className={`block h-[2px] w-2/3 bg-[#fff] rounded-sm transition duration-300 ease-in-out 
        ${isOpen ? "opacity-0" : ""}`}
      ></span>
      <span
        className={`block h-[2px] w-full bg-[#fff] rounded-sm transform transition duration-300 ease-in-out 
        ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
      ></span>
    </button>
  );
};

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <nav className="absolute top-0 left-0 w-full p-4 bg-[#0C4539] border-b border-[#0a392f] border-solid z-100 max-h-[4.6rem]">
      <div className="flex items-center justify-between max-width-1300">
        {/* Logo */}
        <div
          className="relative w-14 h-6 md:w-20 md:h-8 cursor-pointer"
          onClick={() => handleRedirect("/")}
        >
          <Image src={Logo} alt="Logo" fill />
        </div>

        {/* Hamburger Menu & Dark mode button */}
        <div className="flex md:hidden gap-4 items-center justify-center">
          <AnimatedMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div
          className={`${
            isOpen
              ? "max-h-[600px] opacity-100 w-full space-y-6 bg-[#fff] text-[#000700] transition-all duration-700 ease-in-out"
              : "max-h-0 opacity-0 w-full"
          } overflow-hidden gap-6 absolute top-full left-0 flex-col px-6 py-[2rem] md:py-0 md:max-h-fit items-start shadow-md z-10 md:w-fit md:space-x-0 md:opacity-100 md:static md:flex md:flex-row md:items-center md:shadow-none`}
        >
          {navData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-center md:h-full z-100"
            >
              <button
                className={`font-inter text-[#0C4539] md:text-[#FDFDFD] hover:text-[#F9C000] flex items-center gap-1 cursor-pointer ${
                  pathname.startsWith(data.path) ? "!text-[#F9C000]" : ""
                }`}
                onClick={() => handleRedirect(data.path)}
              >
                {data.tab}
              </button>
              <div
                className={`hidden md:block absolute bottom-[-1px] rounded-4xl w-20 h-[2px] transition-all z-100 ${
                  pathname.startsWith(data.path)
                    ? "bg-[#F9C000]"
                    : "bg-transparent"
                }`}
              />
            </div>
          ))}
          <div className="md:hidden">
            <Button variant="outline" />
          </div>
        </div>

        {/* User and Button */}
        <div className="md:flex items-center gap-4 hidden">
          <Button variant="outline"> Shop Now </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
