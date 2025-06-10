import React from "react";
import { Heading, Text } from "..";
import Image from "next/image";
import { AmmaMa, Laddu0 } from "@/public";

const VideoSection = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center text-white text-center">
      {/* Background Image */}
      <Image
        src={AmmaMa}
        alt="Background Video"
        quality={100}
        className="w-full z-0 object-contain"
        priority
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#0000004f] z-10"></div> */}

      {/* Content */}
      {/* <div className="flex flex-col items-center justify-center relative z-20 px-6 md:px-0 text-center">
        <Heading
          level="h1"
          as="h1"
          align="center"
          color="text-white"
          className="md:w-[40rem] !font-[400] !text-white"
        >
          Lorem ipsum dolor adipisicing elit.
        </Heading>

        <Text className="!text-white mt-[1.5rem] md:w-[46rem]">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat ea sapiente fuga, voluptatem, quas beatae eaque atque molestias deleniti non ut sed praesentium ipsam voluptates aperiam repellendus repudiandae vel.`}
        </Text>

        <div className="flex gap-4 justify-center mt-[2rem]">
          <Button className="!bg-white !text-black font-semibold !hover:bg-gray-100 transition">
            Order Now
          </Button>
          <Button className="!bg-transparent border border-white !text-white font-semibold !hover:bg-white !hover:text-black transition">
            {" "}
            Learn More
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default VideoSection;
