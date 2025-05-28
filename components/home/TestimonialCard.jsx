// // components/TestimonialCard.js

// import Image from "next/image";
import { Text } from "..";

// export default function TestimonialCard({ name, role, image, content }) {
//   return (
//     <div className="rounded-xl shadow-sm hover:shadow-md transition p-6 text-center flex flex-col items-center border-[2px] border-[#000700]">
//       <div className="w-16 h-16 rounded-full overflow-hidden relative mb-4">
//         <Image src={image} alt={name} fill className="object-cover" />
//       </div>
//       <Text size="regular" weight="medium" className="mb-2 text-gray-800">
//         {name}
//       </Text>
//       <Text size="tiny" weight="normal" className="text-gray-500 mb-4">
//         {role}
//       </Text>
//       <Text size="small" className="text-gray-600 italic">
//         “{content}”
//       </Text>
//     </div>
//   );
// }

// components/TestimonialCardV2.js

import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialCardV2({
  rating = 5,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  name = "Name Surname",
  position = "Position, Company name",
  avatar = "/images/avatar-placeholder.png",
}) {
  return (
    <div className="rounded-2xl border-[2px] border-black p-[2rem] max-w-md w-full mx-auto min-h-[15rem] flex flex-col justify-between">
      {/* Stars */}
      <div>
        <div className="flex gap-1 text-[#F9C000] text-lg mb-4">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Quote */}
        <Text className="mb-[1.5rem] leading-relaxed">“{content}”</Text>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <img
            src={"https://avatars.githubusercontent.com/u/80949652?v=4"}
            alt={name}
            className="object-cover"
          />
        </div>
        <div>
          <Text size="regular" weight="semibold">
            {name}
          </Text>
          <Text size="regular">{position}</Text>
        </div>
      </div>
    </div>
  );
}
