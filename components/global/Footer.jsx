// components/Footer.jsx
"use client";

import {
  FaFacebookF,
  FaInstagram,
  // FaXTwitter,
  // FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Button, Text } from "..";
import Image from "next/image";
import { Logo } from "@/public";
import { footerLinks } from "@/data/global";
import { useRouter } from "next/navigation";

const socialMediaData = [
  {
    link: "https://www.facebook.com",
    title: "Facebook",
    icon: FaFacebookF,
  },
  {
    link: "https://www.instagram.com/amma_ma_in_london?igsh=OG4zZHFyenJpcmV3&utm_source=qr",
    title: "Instagram",
    icon: FaInstagram,
  },
  {
    link: "https://www.youtube.com/@Amma-ma",
    title: "Youtube",
    icon: FaYoutube,
  },
];

export default function Footer() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-[#0C4539] border-t border-[#FDFDFD] py-[3rem] md:py-[5rem]">
      <div className="max-width-1300 flex flex-col px-[1.25rem] md:px-0 md:flex-row gap-[2.5rem] !mb-[6.5rem]">
        {/* Logo */}
        <div className="w-[10.4rem]">
          <div className="relative w-[3rem] h-[3rem] cursor-pointer">
            <Image src={Logo} alt="Logo" fill />
          </div>
        </div>
        {footerLinks.map((section, index) => (
          <div key={index} className="w-[10.4rem]">
            <Text className="font-semibold mb-[2rem] !text-[#FDFDFD]">
              {section.title}
            </Text>
            <ul className="space-y-[1rem] text-[0.875rem] text-[#FDFDFD] font-inter">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:underline"
                  onClick={() => handleRedirect(item.path)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Newsletter */}
        <div className="w-full md:w-[25rem] overflow-x-hidden">
          <Text className="font-semibold mb-3 !text-[#FDFDFD]">Subscribe</Text>
          <Text className="mb-4 !text-[#FDFDFD]">
            Join our newsletter for updates on our latest offerings and
            promotions.
          </Text>
          <form className="flex flex-col sm:flex-row items-center gap-2 mb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="!text-[#FDFDFD] w-full sm:w-auto flex-1 px-4 py-2 border-[#FDFDFD] !border-[2px] focus:outline-none !rounded-[0.75rem] font-inter"
            />
            <Button
              type="submit"
              className="!text-[#FDFDFD] border-[2px] !border-[#FDFDFD] !bg-transparent !hover:bg-gray-100 w-full md:w-fit"
            >
              Subscribe
            </Button>
          </form>
          <Text size="tiny" className="text-[#FDFDFD]">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </Text>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t-[2px] border-[#FDFDFD] py-[2rem] px-[1.25rem] md:px-8 flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-[1.5rem] max-width-1200">
        <div className="flex flex-col-reverse md:flex-row gap-[2rem] md:gap-[1.5rem]">
          <Text size="small" className="text-[#FDFDFD]">
            © 2025 Amma-ma Foods. All rights reserved.
          </Text>
          <div className="flex flex-col md:flex-row gap-[1.5rem] justify-center md:justify-normal !text-[#FDFDFD]">
            {[
              { label: "Allergen Advisory", path: "/allergen-advisory" },
              { label: "Privacy Policy", path: "/" },
              { label: "Terms of Service", path: "/" },
              { label: "Cookie Settings", path: "/" },
            ].map((tab, index) => (
              <div
                key={index}
                className="text-[0.875rem] leading-[150%] font-inter underline cursor-pointer"
                onClick={() => handleRedirect(tab.path)}
              >
                {tab.label}
              </div>
            ))}
            {/* <a
              href="#"
              className="text-[0.875rem] leading-[150%] font-inter underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[0.875rem] leading-[150%] font-inter underline"
            >
              Cookie Settings
            </a> */}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl text-[#FDFDFD]">
          {/* <FaFacebookF className="cursor-pointer" /> */}
          {/* <FaInstagram className="cursor-pointer" /> */}
          {/* <FaXTwitter className="cursor-pointer" /> */}
          {/* <FaLinkedinIn className="cursor-pointer" /> */}
          {/* <FaYoutube className="cursor-pointer" /> */}
          {socialMediaData.map(({ link, title, icon: Icon }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="text-white hover:text-yellow-300 transition-colors text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Text size="small" align="center" className="text-[#c5c5c5]">
          Website built and managed by{" "}
          <a
            className="underline font-bold"
            href="https://masternext-technologies.vercel.app/"
            target="_blank"
          >
            MasterNext Technologies
          </a>
        </Text>
      </div>
    </footer>
  );
}
