import { Ghee, Jaggery, Laddu, Laddu0, Laddu2 } from "@/public";
import { TiTick } from "react-icons/ti";

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

export const HeroFeatureData = [
  {
    title: "Heritage",
    heading: "Crafting Authenticity Through Time-Honoured Recipes",
    desc: `At Amma-ma Foods, we celebrate the rich traditions of South Indian sweets, lovingly crafted from age-old recipes. Our passion for authenticity and quality shines through every bite, inviting you to indulge in guilt-free delights.`,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Wholesome",
    heading: "Crafted with Care and Authenticity",
    desc: `At Amma-ma Foods, we honour the rich heritage of South Indian sweets, using only the finest, ethically sourced ingredients. Each product reflects our commitment to quality and health, ensuring a delightful experience without compromise.`,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Handmade",
    heading: "Crafted with Love and Care",
    desc: `At Amma-ma Foods, every sweet is lovingly handmade to preserve its authentic essence. Our commitment to traditional methods ensures that each bite reflects our rich heritage.`,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Ancient",
    heading: "Pure Ghee (Indian Clarified Butter)",
    desc: `At Amma-ma Foods, We don’t just make sweets — we use ancient, natural ingredients that truly nourish your body.
<br/>
Ghee is a type of clarified butter, traditionally made in India by slowly simmering butter until the water evaporates and milk solids are removed.
<br/>
<br/>

<span class="font-bold text-[#0C4539] pr-2">✔</span> Rich in healthy fats (especially butyrate, great for digestion)<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span>  Naturally lactose-free<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span>  High smoke point — safe for cooking and baking<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span>  Contains vitamins A, D, E, and K<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span>  Known in Ayurveda for boosting immunity and brain function<br/>
<br/>
Amma-Ma uses pure cow’s ghee, just like it’s been made in Indian kitchens for centuries — with patience and care. We use ghee instead of oils or butter because it’s natural, wholesome, and has been trusted by generations for strength and vitality.`,
    imageSrc: Ghee,
    imageAlt: "Ghee",
  },
  {
    title: "Natural",
    heading: "Jaggery (Natural Cane Sugar)",
    desc: `At Amma-ma Foods, We don’t just make sweets — we use ancient, natural ingredients that truly nourish your body.

Jaggery is a traditional, unrefined sweetener made by boiling sugarcane juice until it solidifies — no chemicals, no processing.
<br/>
<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span> 100% natural and chemical-free<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span> Retains iron, magnesium, potassium, and antioxidants<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span> Helps cleanse the liver and boost energy<br/>
<span class="font-bold text-[#0C4539] pr-2">✔</span> Has a rich, caramel-like taste with deep warmth<br/>
<br/>

We source pure Indian jaggery, just like what’s used in village homes — golden, earthy, and naturally sweet.Unlike white sugar, jaggery supports your health and adds real depth of flavour — making Amma-Ma laddoos sweet and smart.`,
    imageSrc: Jaggery,
    imageAlt: "Jaggery",
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
