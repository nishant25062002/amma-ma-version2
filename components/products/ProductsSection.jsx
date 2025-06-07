// components/ProductsSection.js
"use client";

import { Laddu, Laddu2, Laddu3, Laddu4 } from "@/public";
import { Button, Heading, ProductCard, Text } from "..";
import { useRouter } from "next/navigation";

const products = [
  {
    number: 0,
    id: 0,
    image: Laddu,
    title: "Dry Fruit Laddoo",
    subtitle: "Brain Booster",
    desc: "Improves memory, Good for kids, Fitness energy snack.",
    price: 10,
  },
  {
    number: 1,
    id: 1,
    image: Laddu2,
    title: "Flax Seed Laddoo",
    subtitle: "Omega Booster",
    desc: "Supports heart health, Womens hormone balance, Rich in Omega3.",
    price: 12,
  },
  {
    number: 2,
    id: 2,
    image: Laddu3,
    title: "Black Sesame Laddoo",
    subtitle: "Hormone Balance Booster",
    desc: "Hormone health, Improves hair & skin, Strengthens bones.",
    price: 15,
  },
  {
    number: 3,
    id: 3,
    image: Laddu,
    title: "White Sesame Laddoo",
    subtitle: "Glow Up Boost",
    desc: "Enhances skin glow, Boosts calcium, Supports hair growth.",
    price: 14,
  },
  {
    number: 4,
    id: 4,
    image: Laddu4,
    title: "Urad Dal Laddoo",
    subtitle: "Iron Booster",
    desc: "Ironrich, Strengthens bones, Fitness booster.",
    price: 10,
  },
  {
    number: 5,
    id: 5,
    image: Laddu2,
    title: "Raagi Laddoo",
    subtitle: "Millet Magic Booster",
    desc: "Rich in calcium, Good for bones, Aids digestion",
    price: 12,
  },
  {
    number: 6,
    id: 6,
    image: Laddu3,
    title: "Ravva Laddoo ",
    subtitle: "Energy Booster",
    desc: "Quick energy, Good for kids & adults, Light on digestion.",
    price: 15,
  },
  {
    number: 7,
    id: 7,
    image: Laddu,
    title: "Amma-Ma Power Pack",
    subtitle: "All-in-One Booster",
    desc: "Boosts immunity, Supports brain & heart health, Nourishes overall wellbeing, Family health pack.",
    price: 14,
  },
];

export default function ProductsSection() {
  const router = useRouter();

  const redirectToProducts = () => {
    router.push("/products");
  };

  return (
    <section className="py-[4rem] md:py-[7rem] px-4 md:px-8 bg-[#0C4539]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-[3rem] md:mb-[5rem] flex-wrap gap-4">
          <div>
            <Text
              size="regular"
              weight="semibold"
              className="text-[#F9C000] mb-[1rem]"
            >
              Delight
            </Text>
            <Heading level="h2" className="mb-[1rem] text-[#FDFDFD]">
              Products
            </Heading>
            <Text size="regular" className="text-[#FDFDFD]">
              Explore our range of delicious sugar-free sweets.
            </Text>
          </div>
          <Button
            variant="outline"
            className="hidden md:block"
            onClick={redirectToProducts}
          >
            View all
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] gap-y-[3rem] md:gap-[2rem] md:gap-y-[4rem]">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} index={idx} />
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center mt-[4rem] md:mt-[5rem]">
        <Button variant="solid">Shop Now</Button>
      </div> */}
    </section>
  );
}
