import { Laddu, Laddu0, Laddu2 } from "@/public";

export const navData = [
  {
    tab: "Home",
    path: "/",
  },
  {
    tab: "Our Story",
    path: "/our-story",
  },
  {
    tab: "Our Products",
    path: "/products",
  },
  {
    tab: "Contact Us",
    path: "/contact-us",
  },
];

// data/splitFeatureData.js
export const splitFeatureData = [
  {
    title: "A suitcase full of laddoos and love.",
    description:
      "In the heart of London, Amma’s sweets became a cherished symbol of strength and comfort. Each bite carries the warmth of home, reminding us of the love and care infused in every recipe.",
    points: [
      {
        heading: "A Sweet Legacy",
        text: "Amma’s sweets are more than just treats; they are a connection to our roots.",
      },
      {
        heading: "A Nourishing Tradition",
        text: "Crafted with love, they offer a taste of home for every busy lifestyle.",
      },
    ],
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
    reverse: false,
  },
  {
    title: "More Than a Sweet. It’s a Legacy.",
    description:
      "At Amma-ma Foods, we blend tradition with health, crafting sugar-free South Indian sweets that nourish both body and soul. Our journey is rooted in love, bringing the comforting taste of home to busy lives.",
    points: [
      {
        heading: "Rooted in Culture",
        text: "Inspired by Amma’s timeless recipes passed down with care.",
      },
      {
        heading: "Crafted for Wellness",
        text: "Balanced treats for modern lifestyles without compromise.",
      },
    ],
    imageSrc: Laddu,
    imageAlt: "Legacy of sweets",
    reverse: true,
  },
  {
    title: "Our Mission: Real Food for Real Lives",
    description:
      "We believe in nourishing lives with wholesome ingredients. Our mission is to provide delicious, sugar-free sweets that support your health and well-being.",
    points: [
      {
        heading: "Nutritious Choices",
        text: "Protein-packed goodness from our selection of premium nuts.",
      },
      {
        heading: "Natural Sweetness",
        text: "Enjoy the rich, natural sweetness derived from dates in every bite.",
      },
    ],
    imageSrc: Laddu2,
    imageAlt: "Real food mission",
    reverse: false,
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    items: ["Our Story", "Shop Now", "FAQs", "Contact Us", "Customer Reviews"],
  },
  {
    title: "Connect With Us",
    items: ["Instagram", "Facebook", "Twitter", "LinkedIn", "Newsletter"],
  },
  {
    title: "Stay Updated",
    items: [
      "Join Us",
      "Subscribe Now",
      "Latest News",
      "Special Offers",
      "Gift Ideas",
    ],
  },
];
