// components/LegacySection.jsx

// import { Heading, Text, Button } from "@/components";

// export default function LegacySection() {
//   return (
//     <section className="py-[4rem] md:py-[7rem] px-4 max-w-7xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start">
//         {/* Left Side */}
//         <div className="flex-1">
//           <Heading level="h1">
//             More Than a Sweet.
//             <br />
//             It’s a Legacy.
//           </Heading>
//         </div>

//         {/* Right Side */}
//         <div className="flex-1">
//           <Text size="medium" className="mb-[2rem]">
//             At Amma-ma Foods, we blend tradition with health, crafting
//             sugar-free South Indian sweets that nourish both body and soul. Our
//             journey is rooted in love, bringing the comforting taste of home to
//             busy lives.
//           </Text>

//           <div className="flex gap-[1rem]">
//             <Button variant="solid" secondary>
//               Explore
//             </Button>
//             <Button variant="outline" secondary>
//               Discover
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Heading, Text, Button } from "@/components";
import { motion } from "framer-motion";

export default function LegacySection() {
  return (
    <section className="py-[4rem] md:py-[7rem] px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start gap-[2rem]"
      >
        {/* Left Side */}
        <div className="flex-1">
          <Heading level="h1">
            More Than a Sweet.
            <br />
            It’s a Legacy.
          </Heading>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Text size="medium" className="mb-[2rem]">
            At Amma-ma Foods, we blend tradition with health, crafting
            sugar-free South Indian sweets that nourish both body and soul. Our
            journey is rooted in love, bringing the comforting taste of home to
            busy lives.
          </Text>

          <div className="flex gap-[1rem]">
            <Button variant="solid" secondary>
              Explore
            </Button>
            <Button variant="outline" secondary>
              Discover
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
