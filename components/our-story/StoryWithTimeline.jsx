import React from "react";
import { Heading, Text } from "..";
import { ammaMaTimeline } from "@/data/global";

const StoryWithTimeline = () => {
  return (
    <section className="hero-gradient">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-[1rem] py-[3rem] md:py-[7rem]">
        <Text size="regular" weight="semibold" className="text-[#000700]">
          Our Story
        </Text>
        <Heading level="h1" className="mb-[0.5rem]">
          The Amma-Ma Story
        </Heading>
        <Text align="center">
          When I moved to London, I brought more than luggage - I carried
          memories. Memories of Amma pressing laddoos into my hands - not just
          as dessert, but as nourishment, comfort, and love.
        </Text>
      </div>

      <div className="pb-[3rem] md:pb-[7rem]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="md:pr-[5rem] sticky top-[7rem] self-start">
            <Heading level="h6" className="mb-[1rem]">
              A Sweet Realisation
            </Heading>
            <Heading level="h3" className="mb-[1.5rem]">
              What Sparked Amma-ma: A Journey of Love and Purpose
            </Heading>
            <Text size="medium">
              The journey of Amma-ma began with a heartfelt realisation: the
              need for wholesome, sugar-free sweets that nourish both body and
              soul. Driven by love and tradition, we set out to create a legacy
              of health and comfort.
            </Text>
          </div>

          {/* Right Section - Timeline */}
          <div className="relative pl-[3rem] md:pl-[5rem] border-l-3 border-[#D4A850] space-y-8 flex flex-col gap-[2rem] ">
            {ammaMaTimeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[4.05rem] md:-left-[6.05rem] w-[2rem] h-[2rem] top-0 rounded-full bg-[#f1debe] flex items-center justify-center">
                  <span className="w-[1rem] h-[1rem] rounded-full bg-[#D4A850]" />
                </div>
                <Heading level="h4" className="mb-[1rem]">
                  {item.title}
                </Heading>

                {item.type === "text" ? (
                  <Text size="medium">{item.content}</Text>
                ) : (
                  <ul
                    className="list-disc pl-5 space-y-1"
                    style={{ fontSize: "1rem", lineHeight: "1.75rem" }}
                  >
                    {item.content.map((point, i) => (
                      <li
                        key={i}
                        className="text-[1.125rem] leading-[150%] font-inter"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryWithTimeline;
