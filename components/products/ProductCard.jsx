// components/ProductCard.js
"use client";

import Image from "next/image";
import { Button, Heading, Text } from "..";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useEffect, useState } from "react";

export default function ProductCard({
  id,
  image,
  title,
  subtitle,
  price,
  desc,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isPresentInCart, setIsPresentInCart] = useState(false);

  useEffect(() => {
    console.log("runs");
    setIsPresentInCart(cartItems.findIndex((item) => item.id === id) !== -1);
  }, [cartItems]);

  const handleAddToCart = () => {
    console.log("ging", isPresentInCart);
    if (isPresentInCart) {
      console.log("runging", isPresentInCart, cartItems);
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        addToCart({
          id,
          image,
          title,
          subtitle,
          price,
          desc,
        })
      );
    }
  };

  const handleRedirect = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="flex flex-col overflow-hidden cursor-pointer hover:text-[#F9C000] transition group gap-[1rem]">
      <div className="flex flex-col gap-[1rem]" onClick={handleRedirect}>
        {/* Image Container */}
        <div className="relative transition-all duration-250 ease-in-out h-[11.8rem] md:h-[22.5rem] overflow-hidden rounded-[1rem]">
          <div className="relative w-full h-[11.8rem] md:h-[22.5rem] group-hover:h-[8re m] md:group-hover:h-[16r em] transition-all duration-250 ease-in-out rounded-[1rem] md:group-hover:scale-130">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-[1rem] transition-all duration-250 ease-in-out"
            />
          </div>

          {/* Description Appears Below */}
          <Text
            size="small"
            className="absolute bottom-0 h-[6rem] z-10 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 ease-in-out mt-3 text-sm text-[#edebeb] w-full bg-[#0c4539c1] p-[1rem_0.8rem]"
          >
            {desc}
          </Text>
        </div>

        <div className="flex justify-between min-h-[6rem] md:min-h-0">
          <div>
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
              className="text-[#F9C000] group-hover:text-[#F9C000]"
            >
              {subtitle}
            </Text>
          </div>
          <Text
            size="large"
            weight="semibold"
            className="text-[#FDFDFD] group-hover:text-[#F9C000]"
          >
            £{price}
          </Text>
        </div>
      </div>
      <Button
        variant={isPresentInCart ? "solid" : "outline"}
        onClick={handleAddToCart}
      >
        {isPresentInCart ? "Remove to Cart" : "Add to Cart"}
      </Button>
    </div>
  );
}
