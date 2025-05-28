// components/ProductCard.js

import Image from "next/image";
import { Heading, Text } from "..";

export default function ProductCard({ image, title, subtitle, price }) {
  return (
    <div className="overflow-hidden cursor-pointer hover:text-[#F9C000] transition group">
      <div className="relative w-full h-[11.8rem] md:h-[22.5rem] mb-[1rem]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-[1rem]"
        />
      </div>

      <div className="pb-4">
        <Heading
          level="h6"
          family="poppins"
          weight="semibold"
          className="text-[#FDFDFD]  group-hover:text-[#F9C000]"
        >
          {title}
        </Heading>
        <Text
          size="small"
          className="text-[#F9C000] mb-[0.5rem] group-hover:text-[#F9C000]"
        >
          {subtitle}
        </Text>
        <Text
          size="small"
          weight="semibold"
          className="text-[#FDFDFD] group-hover:text-[#F9C000]"
        >
          ${price}
        </Text>
      </div>
    </div>
  );
}
