"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Button, Text } from "..";
import { placeOrder } from "@/lib/api/orderApi";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearCart } from "@/redux/slices/cartSlice";

const CheckoutSection = ({ amount }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [giftPack, setGiftPack] = useState("No");

  const redirectToSuccessPage = (orderId) => {
    router.push(`/payment-success?orderId=${orderId}`);
  };

  // name, email, address, phone add a form/ or input for these variables

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
      redirect: "if_required",
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    // ✅ Payment was successful – now call order API
    try {
      const orderData = {
        items: cartItems,
        name,
        email,
        address,
        phone,
        giftPack,
        totalPrice: amount,
      };

      const orderResult = await placeOrder(orderData);
      console.log("✅ Order saved:", orderResult);
      dispatch(clearCart());
      redirectToSuccessPage();
      // Optional: redirect manually
      // window.location.href = `/payment-success?orderId=${orderResult.order.orderId}`;
    } catch (err) {
      console.error("❌ Order API error:", err.message);
      setErrorMessage("Payment successful but failed to save order.");
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  // const separateFunction = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const orderData = {
  //       items: cartItems,
  //       name,
  //       email,
  //       address,
  //       phone,
  //       giftPack,
  //       totalPrice: amount,
  //     };

  //     const orderResult = await placeOrder(orderData);
  //     console.log("✅ Order saved:", orderResult);
  //     dispatch(clearCart());
  //     redirectToSuccessPage(orderResult.order.orderId);
  //   } catch (err) {
  //     console.error("❌ Order API error:", err.message);
  //     setErrorMessage("Payment successful but failed to save order.");
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-10  rounded-md space-y-4"
    >
      <div className="flex flex-col md:flex-row gap-[1rem]">
        <div className="flex flex-col items-start w-full gap-[0.25rem]">
          <Text size="small">Full Name:</Text>
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md shadow-sm px-4 py-3 hover:shadow-md transition w-full placeholder-[#898989] text-[#000700] text-[1rem] outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-start w-full gap-[0.25rem]">
          <Text size="small">Email:</Text>
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-md shadow-sm px-4 py-3 hover:shadow-md transition w-full placeholder-[#898989] text-[#000700] text-[1rem] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-start w-full gap-[0.25rem]">
          <Text size="small">Phone Number:</Text>
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md shadow-sm px-4 py-3 hover:shadow-md transition w-full placeholder-[#898989] text-[#000700] text-[1rem] outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col items-start w-full gap-[0.25rem]">
        <Text size="small">Delivery Address:</Text>
        <textarea
          type="text"
          placeholder="Delivery Address"
          className="border border-gray-300 rounded-md shadow-sm px-4 py-3 hover:shadow-md transition w-full placeholder-[#898989] text-[#000700] text-[1rem] outline-none"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col items-start w-full gap-[0.25rem]">
        <Text size="small">Gift Pack:</Text>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-[#000700] text-[1rem] justify-center cursor-pointer">
            <input
              type="radio"
              name="giftPack"
              value="Yes"
              className="form-radio"
              onChange={() => setGiftPack("Yes")}
              checked={giftPack === "Yes"}
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-[#000700] text-[1rem] justify-center cursor-pointer">
            <input
              type="radio"
              name="giftPack"
              value="No"
              className="form-radio"
              onChange={() => setGiftPack("No")}
              checked={giftPack === "No"}
            />
            No
          </label>
        </div>
      </div>

      {/* <Button onClick={separateFunction}>Submit Order</Button> */}

      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <Button
        disabled={!stripe || loading}
        className="text-white w-full mt-4 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
        secondary
      >
        {!loading ? `Pay £${amount}` : `Processing...`}
      </Button>
    </form>
  );
};

export default CheckoutSection;
