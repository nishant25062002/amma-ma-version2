// components/ProductDetailSection.jsx
"use client";

import { useState } from "react";
import { Heading, Text, Button } from "@/components";

const sizes = ["500g", "1000g", "Custom"];

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("Details");
  const [selectedSize, setSelectedSize] = useState("500g");
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="pb-[4rem] md:pb-[6rem] px-4 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row md:gap-[5rem] w-full">
      {/* Left */}
      <div className="flex flex-col w-full">
        <Heading level="h3" className="mb-[2rem]">
          Date Delight
        </Heading>

        <Text className="mb-[1rem]">
          Our Date Delight is a nutritious alternative to traditional sweets,
          made with the finest dates and dry fruits. Indulge guilt-free in a
          treat that nourishes your body.
        </Text>

        <ul className="list-disc pl-[1.25rem] space-y-[0.5rem] mb-[2rem]">
          <li>Made with natural ingredients for a healthy indulgence.</li>
          <li>Crafted with love using secret homemade recipes.</li>
          <li>Perfect for gifting or personal enjoyment.</li>
        </ul>

        {/* Tabs */}
        <div className="flex space-x-6 mb-[1.5rem]">
          {["Details", "Shipping", "Returns"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 border-b-2 transition ${
                activeTab === tab
                  ? "border-black"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Text>
          {activeTab === "Details" &&
            "Our Date Delight is crafted using traditional recipes and natural ingredients. Each bite is a burst of flavour, free from refined sugars. Enjoy the wholesome goodness!"}
          {activeTab === "Shipping" &&
            "We offer fast and reliable shipping with tracking. Orders over £50 receive free delivery within the UK."}
          {activeTab === "Returns" &&
            "Your satisfaction is important to us. Returns are accepted within 14 days of delivery for unopened products."}
        </Text>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-[1.5rem] md:min-w-[25rem] max-w-[25rem]">
        <Heading level="h4" as="h4">
          £10
        </Heading>

        <Text size="small" className="">
          <span className="text-black mr-2">⭐⭐⭐⭐</span>
          (4.5 stars) • 15 reviews
        </Text>

        <div>
          <Text className="mb-1">Size</Text>
          <div className="flex gap-[1rem]">
            {sizes.map((size) => (
              <button
                key={size}
                disabled={size === "Custom"}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-2 text-[1rem] leading-[150%] ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } ${
                  size === "Custom"
                    ? "cursor-not-allowed opacity-60"
                    : "hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Text>Quantity</Text>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 text-center border border-black rounded px-2 py-1"
          />
        </div>

        <div className="flex flex-col gap-[1rem]">
          <Button variant="solid" className="w-full" secondary>
            Add to cart
          </Button>
          <Button variant="outline" className="w-full" secondary>
            Buy now
          </Button>
          <Text size="tiny" align="center" className="text-gray-500">
            Free shipping over £50
          </Text>
        </div>
      </div>
    </section>
  );
}
