import React from "react";
import { HeroFeatureSection } from "..";
import { HeroFeatureData } from "@/data/global";

const HeroFeature = () => {
  return (
    <div className="flex flex-col py-[1rem] md:py-[2rem] bg-[#FFC06D] max-w-full overflow-hidden">
      {HeroFeatureData.map((data, index) => (
        <HeroFeatureSection
          key={index}
          mainClass={index % 2 ? "bg-[#fff]" : "bg-[#FFC06D]"}
          reverse={index % 2}
          {...data}
        />
      ))}
    </div>
  );
};

export default HeroFeature;
