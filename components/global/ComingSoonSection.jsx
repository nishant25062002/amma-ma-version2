// app/coming-soon/page.jsx (if using Next.js app router)
// OR pages/coming-soon.jsx (for pages router)

"use client";

import React from "react";
import { Text } from "..";
import Image from "next/image";
import { ComingSoon } from "@/public";

const ComingSoonSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Image
        src={ComingSoon}
        alt="Coming Soon Image"
        height={100}
        width={200}
      />

      <Text size="medium" className="mb-6 max-w-sm">
        {`We’re working hard to bring something amazing for you. Stay tuned!`}
      </Text>
      <div className="flex items-center gap-2 ">
        <span className="animate-pulse w-3 h-3 rounded-full bg-[#F9C000]" />
        <span className="text-sm text-gray-500 font-semibold">
          Launching soon
        </span>
      </div>
    </div>
  );
};

export default ComingSoonSection;
