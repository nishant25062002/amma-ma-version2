// components/ProductDetailSection.jsx
"use client";

import { useEffect, useState } from "react";
import { Heading, Text, Button, Alert } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";

const sizes = [
  { label: "500g", value: 500 },
  { label: "1000g", value: 1000 },
];

export default function ProductDetail({ productDetails }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Details");
  const [selectedWeight, setSelectedWeight] = useState(500);
  const [openPopUp, setPopUp] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const [isPresentInCart, setIsPresentInCart] = useState(false);

  const handleAddToCart = () => {
    const id = productDetails?.id;
    if (selectedWeight < 100) {
      return setPopUp(true);
    }
    if (isPresentInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        addToCart({
          ...productDetails,
          weight: selectedWeight,
        })
      );
    }
  };

  const handleRedirect = () => {
    router.push(`/cart`);
  };

  useEffect(() => {
    setIsPresentInCart(
      cartItems.findIndex((item) => item.id === productDetails?.id) !== -1
    );
  }, [cartItems]);

  return (
    <section className="pb-[4rem] md:pb-[6rem] px-4 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row md:gap-[5rem] w-full">
      {/* Left */}
      <Alert
        heading={`🧪 Minimum Quantity Required`}
        message="Weight should be at least 100 grams to proceed with your order. Please increase the quantity."
        isOpen={openPopUp}
        handleclose={() => setPopUp(false)}
      />

      <div className="flex flex-col w-full">
        <Heading level="h3" className="mb-[2rem]">
          {productDetails?.title}
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
                  : "border-transparent text-gray-500 cursor-pointer"
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
          £{productDetails?.price}
        </Heading>

        <Text size="small" className="">
          <span className="text-black mr-2">⭐⭐⭐⭐</span>
          (4.5 stars) • 15 reviews
        </Text>

        <div className="space-y-[1rem]">
          <Text className="mb-1">Size</Text>
          <div className="flex gap-[1rem]">
            {sizes.map((size) => (
              <button
                key={size.label}
                onClick={() => setSelectedWeight(size.value)}
                className={`border-2 border-[#010303] px-4 py-2 text-[1rem] leading-[150%] w-[6rem] cursor-pointer ${
                  selectedWeight === size.value
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <input
              type="number"
              min={100}
              placeholder="Custom"
              className={`border-2 border-[#bbbbbb] px-4 py-2 text-[1rem] leading-[150%] w-[10rem] placeholder-[#bbbbbb]`}
              onClick={(e) => setSelectedWeight(e.target.value)}
            />
            (in grams)
          </div>
        </div>

        <div>
          <Text className="mb-1">Quantity</Text>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 text-center border-2 border-[#010303] rounded px-2 py-1"
          />
        </div>

        <div className="flex flex-col gap-[1rem]">
          <Button
            variant="solid"
            className="w-full"
            secondary
            onClick={handleAddToCart}
          >
            {isPresentInCart ? "Remove to Cart" : "Add to Cart"}
          </Button>
          <Button
            variant="outline"
            className="w-full"
            secondary
            onClick={handleRedirect}
          >
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
