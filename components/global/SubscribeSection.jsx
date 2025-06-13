// components/SubscribeSection.js

import Image from "next/image";
import { Button, Heading, Text } from "..";
import { Laddu } from "@/public";

export default function SubscribeSection() {
  return (
    <section
      className="bg-[#FDFDFD] py-[4rem] md:py-[7rem] px-[1.25rem]"
      id="join-us"
    >
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden relative">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={Laddu}
            alt="Subscribe background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#00000080]"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center relative z-10 text-center text-white p-[2rem] md:p-[4rem]">
          <Heading
            level="h2"
            align="center"
            className="text-[#FDFDFD] mb-[1.5rem]"
          >
            Join the Amma-Ma Family
          </Heading>

          <Text
            size="regular"
            align="center"
            className="text-[#FDFDFD] mb-[2rem] max-w-2xl mx-auto"
          >
            Subscribe to receive early access to new launches, exclusive offers,
            and behind-the-scenes stories from Amma-Ma.
          </Text>

          {/* Form */}
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-[1rem]">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder-[#FDFDFDFDFDFD99] focus:outline-none focus:ring-2 focus:ring-green-400 w-full md:w-[23.8rem]"
              required
            />
            <Button type="submit" variant="solid" className="w-full md:w-fit">
              Sign Up
            </Button>
          </form>

          <Text size="tiny" className="text-[#FDFDFD] max-w-lg">
            No spam - just meaningful updates and sweet surprises crafted for
            you. By clicking Sign Up, you agree to our Terms and Conditions.
          </Text>
        </div>
      </div>
    </section>
  );
}
