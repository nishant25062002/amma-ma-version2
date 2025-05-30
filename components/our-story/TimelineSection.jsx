// components/TimelineSection.jsx

import { Heading, Text, Button } from "@/components";
import { FaCube } from "react-icons/fa";

const timelineData = [
  {
    title: "Our Origins",
    description:
      "Founded with a passion for authentic, healthy sweets, rooted in South Indian traditions.",
  },
  {
    title: "Milestones Achieved",
    description:
      "From our first recipe to our thriving online community, every step has been meaningful.",
  },
  {
    title: "Crafting Quality",
    description:
      "We source premium ingredients directly from India, ensuring authenticity and quality in every bite.",
  },
  {
    title: "Looking Ahead",
    description:
      "Join us on our journey to redefine sweets, one healthy treat at a time.",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Content */}
      <div>
        <Text size="small" weight="medium" className="text-gray-700 mb-2">
          Journey
        </Text>
        <Heading level="h2" className="mb-6">
          Our Story: From
          <br />
          Tradition to Modern Delight
        </Heading>
        <div className="flex gap-4">
          <Button variant="outline">Learn More</Button>
          <Button
            variant="text"
            className="text-black underline flex items-center gap-1"
          >
            Button <span className="text-lg">›</span>
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Icon + line */}
            <div className="flex flex-col items-center">
              <FaCube className="text-black text-xl mb-2" />
              {index !== timelineData.length - 1 && (
                <div className="w-px bg-gray-400 h-full" />
              )}
            </div>

            {/* Text */}
            <div>
              <Heading level="h5" className="mb-1">
                {item.title}
              </Heading>
              <Text size="small" className="text-gray-700">
                {item.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
