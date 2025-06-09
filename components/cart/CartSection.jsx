"use client";

import React from "react";
import { Button, Heading, Text } from "..";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const CartSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <section className="max-w-7xl mx-auto py-[4rem] md:py-[6rem] px-4 md:px-10">
      <Heading level="h2" className="mb-6">
        Your Cart
      </Heading>

      {cartItems.length === 0 ? (
        <div className="h-[15rem] w-full flex items-center justify-center">
          <Text>Your cart is empty.</Text>
          <Button
            variant="text"
            secondary
            className="underline text-[#0C4539] bg-transparent hover:bg-[#0C4539]/10 ml-1"
            onClick={() => handleRedirect("/products")}
          >
            See Products
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-6 w-full">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-xl shadow-sm w-full"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-[8rem] w-[10rem] overflow-hidden rounded-md bg-amber-50 flex items-center">
                    <Image
                      src={item.image}
                      alt={"Product Image"}
                      className="absolute object-cover"
                    />
                  </div>
                  <div>
                    <Heading level="h5" className="mb-1">
                      {item.title}
                    </Heading>
                    <div className="flex gap-5">
                      <Text size="tiny">
                        Price: <strong>£{item.price}</strong>
                      </Text>
                      <Text size="tiny">
                        Weight: <strong>{item.weight}grams</strong>
                      </Text>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                      >
                        <FiMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end text-right gap-3 mt-6 md:mt-0 w-full md:w-full">
                  <div className="flex flex-col">
                    <Text size="tiny" className="">
                      Total Price:{" "}
                      <strong>
                        £{(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </Text>
                    <Text size="tiny" className="">
                      Total Weight:{" "}
                      <strong>
                        {(item.weight * item.quantity).toFixed(2)}grams
                      </strong>
                    </Text>
                  </div>

                  <Button
                    variant="outline"
                    secondary
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end mt-10">
            <Text className="text-lg font-semibold mb-2">
              Total: £{total.toFixed(2)}
            </Text>
            <Button
              className="mt-2"
              secondary
              onClick={() => handleRedirect("/payment")}
            >
              Continue to Payment
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartSection;
