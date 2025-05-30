import { splitFeatureData } from "@/data/global";
import React from "react";
import { SplitFeatureSection } from "..";

export default function FeatureSection() {
  return (
    <div className="flex flex-col py-[1rem] md:py-[2rem] bg-[#FFC06D]">
      {splitFeatureData.map((section, index) => (
        <SplitFeatureSection
          key={index}
          {...section}
          reverse={index % 2}
          mainClass={index % 2 ? "bg-[#fff]" : "bg-[#FFC06D]"}
        />
      ))}
    </div>
  );
}
