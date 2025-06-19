"use client";
import React, { useEffect, useState, useRef } from "react";
import { getOrder } from "@/lib/api/orderApi";
// import html2pdf from "html2pdf.js";
import { QRCodeSVG } from "qrcode.react";
import { Text } from "@/components";
// import html2canvas from "html2canvas";

const PaymentSuccess = ({ searchParams: { orderId = "" } }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const receiptRef = useRef();
  const WEBSITE_URL = "https://amma-ma-version2.vercel.app/";
  const INVOICE_URL = `https://amma-ma-version2.vercel.app/payment-success?orderId=${orderId}`;

  useEffect(() => {
    if (!orderId) return;

    const getOrderDetails = async () => {
      try {
        const res = await getOrder(orderId);
        setOrderDetails(res);
      } catch (err) {
        console.error("❌ Order API error:", err.message || err);
      } finally {
        setLoading(false);
      }
    };

    getOrderDetails();
  }, [orderId]);

  // const handleDownload = () => {
  //   console.log("receiptRef.current:", receiptRef.current);

  //   if (!receiptRef.current) return;

  //   const opt = {
  //     margin: 0.5,
  //     filename: `Order-${orderId}.pdf`,
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //   };
  //   const testDiv = document.createElement("div");
  //   const element = document.getElementById("receipt");
  //   testDiv.innerHTML = element;
  //   html2pdf().from(testDiv).save();

  //   html2pdf().from(element).save();
  // };

  // const handleDownload = async () => {
  //   if (!receiptRef.current) {
  //     alert("Invoice not ready.");
  //     return;
  //   }

  //   try {
  //     const canvas = await html2canvas(receiptRef.current, {
  //       scale: 2,
  //       useCORS: true,
  //     });

  //     const link = document.createElement("a");
  //     link.download = `Order-${orderId}.png`;
  //     link.href = canvas.toDataURL("image/png");
  //     link.click();
  //   } catch (err) {
  //     console.error("❌ Error generating image:", err);
  //   }
  // };

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-[60vh] text-xl text-gray-800 font-medium">
        Loading your order details...
      </main>
    );
  }

  if (!orderDetails) {
    return (
      <main className="flex justify-center items-center min-h-[60vh] text-xl text-red-600 font-medium">
        Something went wrong. Order not found.
      </main>
    );
  }

  const {
    name,
    email,
    phone,
    address,
    orderDate,
    orderId: oid,
    giftPack,
    items = [],
    status,
  } = orderDetails;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-[#0C4539] mb-3 animate-pulse">
          🎉 Thank You!
        </h1>
        <p className="text-lg text-gray-600">
          Your order was placed successfully.
        </p>
      </div>

      {/* Receipt with QR */}
      {orderDetails && (
        <div
          ref={receiptRef}
          id={"receipt"}
          className="bg-white shadow-xl rounded-lg p-6 text-gray-800 border border-purple-300"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#0C4539]">
            Order Receipt
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <p>
              <strong>Order ID:</strong> {oid}
            </p>
            <p>
              <strong>Date:</strong> {orderDate}
            </p>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <p>
              <strong>Gift Pack:</strong> {giftPack}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="capitalize">{status}</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#0C4539]/90">
              Items Ordered:
            </h3>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              {items.map((item, idx) => (
                <li key={idx}>
                  {item.title} – {item.quantity} × £{item.price}
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code Section */}
          <div className="flex gap-[2rem]">
            <div className="mt-10">
              <Text size="tiny" className="mb-1">
                Scan QR to see you invoice.
              </Text>
              <div className="inline-block border p-2 rounded-md shadow-md">
                <QRCodeSVG value={INVOICE_URL} size={60} />
              </div>
            </div>
            <div className="mt-10">
              <Text size="tiny" className="mb-1">
                Scan QR to visit our website
              </Text>
              <div className="inline-block border p-2 rounded-md shadow-md">
                <QRCodeSVG value={WEBSITE_URL} size={60} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download Button */}
      {/* <div className="flex justify-center text-center mt-8">
        <Button
          onClick={() => {
            if (!receiptRef.current) {
              alert("Invoice not ready yet. Please try again in a moment.");
              return;
            }
            handleDownload();
          }}
          className="transition duration-300"
          secondary
        >
          Download Invoice
        </Button>
      </div> */}
    </main>
  );
};

export default PaymentSuccess;
