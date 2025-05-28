import React from "react";
import { Heading, HeroFeatureSection } from "..";

const HeroFeature = () => {
  const data = [
    {
      title: "Heritage",
      heading: "Crafting Authenticity Through Time-Honoured Recipes",
      desc: `At Amma-ma Foods, we celebrate the rich traditions of South Indian sweets, lovingly crafted from age-old recipes. Our passion for authenticity and quality shines through every bite, inviting you to indulge in guilt-free delights.`,
    },
    {
      title: "Wholesome",
      heading: "Crafted with Care and Authenticity",
      desc: `At Amma-ma Foods, we honour the rich heritage of South Indian sweets, using only the finest, ethically sourced ingredients. Each product reflects our commitment to quality and health, ensuring a delightful experience without compromise.`,
    },
    {
      title: "Handmade",
      heading: "Crafted with Love and Care",
      desc: `At Amma-ma Foods, every sweet is lovingly handmade to preserve its authentic essence. Our commitment to traditional methods ensures that each bite reflects our rich heritage.`,
    },
  ];
  return (
    <div className="flex flex-col py-[5rem] bg-[#FFC06D]">
      {data.map((data, index) => (
        <HeroFeatureSection
          key={index}
          mainClass={index % 2 ? "bg-[#fff]" : "bg-[#FFC06D]"}
          className={`flex ${index % 2 ? "!flex-row-reverse" : ""}`}
          {...data}
        />
      ))}
      {/* <HeroFeatureSection mainClass="bg-[#FFC06D]" />
      <HeroFeatureSection
        className="flex md:!flex-row-reverse"
        mainClass="bg-[#fff]"
      />
      <HeroFeatureSection mainClass="bg-[#FFC06D]" /> */}
    </div>
  );
};

export default HeroFeature;
