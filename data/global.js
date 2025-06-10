import { Ghee, Jaggery, Laddu, Laddu0, Laddu2, Laddu3, Laddu4 } from "@/public";

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

export const productsData = [
  {
    number: 0,
    id: "0",
    image: Laddu,
    title: "Dry Fruit Laddoo",
    subtitle: "Brain Booster",
    desc: "Improves memory, Good for kids, Fitness energy snack.",
    price: 10,
    photos: [Laddu, Laddu, Laddu, Laddu, Laddu],
  },
  {
    number: 1,
    id: "1",
    image: Laddu2,
    title: "Flax Seed Laddoo",
    subtitle: "Omega Booster",
    desc: "Supports heart health, Womens hormone balance, Rich in Omega3.",
    price: 12,
    photos: [Laddu2, Laddu2, Laddu2, Laddu2, Laddu2],
  },
  {
    number: 2,
    id: "2",
    image: Laddu3,
    title: "Black Sesame Laddoo",
    subtitle: "Hormone Balance Booster",
    desc: "Hormone health, Improves hair & skin, Strengthens bones.",
    price: 15,
    photos: [Laddu3, Laddu3, Laddu3, Laddu3, Laddu3],
  },
  {
    number: 3,
    id: "3",
    image: Laddu,
    title: "White Sesame Laddoo",
    subtitle: "Glow Up Boost",
    desc: "Enhances skin glow, Boosts calcium, Supports hair growth.",
    price: 14,
    photos: [Laddu, Laddu, Laddu, Laddu, Laddu],
  },
  {
    number: 4,
    id: "4",
    image: Laddu4,
    title: "Urad Dal Laddoo",
    subtitle: "Iron Booster",
    desc: "Ironrich, Strengthens bones, Fitness booster.",
    price: 10,
    photos: [Laddu4, Laddu4, Laddu4, Laddu4, Laddu4],
  },
  {
    number: 5,
    id: "5",
    image: Laddu2,
    title: "Raagi Laddoo",
    subtitle: "Millet Magic Booster",
    desc: "Rich in calcium, Good for bones, Aids digestion",
    price: 12,
    photos: [Laddu2, Laddu2, Laddu2, Laddu2, Laddu2],
  },
  {
    number: 6,
    id: "6",
    image: Laddu3,
    title: "Ravva Laddoo ",
    subtitle: "Energy Booster",
    desc: "Quick energy, Good for kids & adults, Light on digestion.",
    price: 15,
    photos: [Laddu3, Laddu3, Laddu3, Laddu3, Laddu3],
  },
  {
    number: 7,
    id: "7",
    image: Laddu,
    title: "Amma-Ma Power Pack",
    subtitle: "All-in-One Booster",
    desc: "Boosts immunity, Supports brain & heart health, Nourishes overall wellbeing, Family health pack.",
    price: 14,
    photos: [Laddu, Laddu, Laddu, Laddu, Laddu],
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
    title: "Our Roots",
    heading: "Timeless Recipes. <br/> Uncompromised Quality.",
    desc: `At Amma-Ma Foods, we honour the timeless traditions of South Indian sweet-making. Each laddoo is lovingly handcrafted using age-old recipes passed down through generations.
    <br/>
    With a commitment to purity and wellness, our sweets are free from refined sugar and preservatives - offering an authentic, guilt-free indulgence in every bite.`,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Slow-Made Goodness",
    heading: "Crafted by Hand. <br/> Guided by Heritage.",
    desc: `At Amma-Ma Foods, every laddoo is handcrafted with devotion to time-tested techniques. We honour traditional methods not just to preserve flavour, but to preserve feeling - the kind passed from grandmother to kitchen to you.
    <br/>
    Each batch is made in small quantities with care, ensuring every bite reflects the love and legacy we proudly carry forward.
    `,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Wholesome",
    heading: "Rediscover Sweets That Nourish",
    desc: `Experience the rich taste of traditional South Indian sweets - without the guilt. Crafted with pure, natural ingredients and sweetened with dates and dry fruits, Amma-Ma laddoos offer a perfect balance of indulgence and wellness. 
    <br/>
    Free from preservatives and refined sugar, every bite supports your health, naturally.
    `,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Wholesome",
    heading: "Naturally Sweet. <br/> Honestly Healthy.",
    desc: `Our sweets are sweetened by nature - no refined sugar, no shortcuts. 
    <br/>
    Just the wholesome goodness of dry fruits, seeds, and ancient ingredients that support your well-being.
    `,
    imageSrc: Laddu0,
    imageAlt: "Laddoo and love",
  },
  {
    title: "Wholesome",
    heading: "Small Bites, Big Benefits",
    desc: `Each laddoo is packed with fiber, healthy fats, and essential nutrients - supporting heart health, digestion, and sustained energy.
    <br/>
    It is not just a sweet - it is smart nourishment, the Amma-Ma way.
    `,
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
    items: [
      { label: "Our Story", path: "/our-story" },
      { label: "Shop Now", path: "/products" },
      { label: "FAQs", path: "/#faqs" },
      { label: "Contact Us", path: "/contact-us" },
      { label: "Customer Reviews", path: "/#reviews" },
    ],
  },
  {
    title: "Connect With Us",
    items: [
      { label: "Instagram", path: "https://instagram.com" },
      { label: "Facebook", path: "https://facebook.com" },
      { label: "Twitter", path: "https://twitter.com" },
      { label: "LinkedIn", path: "https://linkedin.com" },
      // { label: "Newsletter", path: "/newsletter" },
    ],
  },
  {
    title: "Stay Updated",
    items: [
      { label: "Join Us", path: "/#join-us" },
      // { label: "Subscribe Now", path: "/subscribe" },
      { label: "Latest News", path: "/coming-soon" },
      { label: "Special Offers", path: "/coming-soon" },
      { label: "Gift Ideas", path: "/coming-soon" },
    ],
  },
];

export const faqData = [
  {
    question: "Are your sweets really sugar-free?",
    answer:
      "Yes! We use only dates and jaggery - no refined sugar, no shortcuts.",
  },
  {
    question: "Where are Amma-Ma sweets made?",
    answer:
      "All our sweets are handcrafted in the UK using ethically sourced ingredients.",
  },
  {
    question: "Are your products suitable for kids?",
    answer:
      "Absolutely! Amma-Ma laddoos are packed with nuts, seeds, and natural sweetness - a great snack for all ages.",
  },
  {
    question: "Do you offer vegan options?",
    answer:
      "Yes, many of our products are naturally vegan. Please check each product page for more details.",
  },
  {
    question: "How long do the laddoos stay fresh?",
    answer:
      "Our sweets are best enjoyed within 8 to 10 days of delivery. Store them in a cool, dry place in an airtight container.",
  },
  {
    question: "Do you ship across the UK?",
    answer: "Yes, we deliver across the UK with fast and secure shipping.",
  },
  {
    question: "Can I gift Amma-Ma sweets to someone?",
    answer:
      "Yes! Our sweets make perfect gifts. You can add a note at checkout for a personal touch.",
  },
  {
    question: "How are Amma-Ma sweets packaged?",
    answer:
      "With care and sustainability in mind - our packaging is minimal, eco-conscious, and food-safe.",
  },
];

export const ammaMaTimeline = [
  {
    title: "But here, I saw a problem:",
    type: "text",
    content:
      "Students, professionals, parents – rushing through life, living on chips and noodles, too tired to cook, too busy to care. Not by choice, but because life doesn't slow down.",
  },
  {
    title: "That's why I started Amma-Ma.",
    type: "text",
    content:
      "To offer what Amma once gave me – handmade, sugar-free, nutritious sweets crafted with love and purpose.",
  },
  {
    title: "Each laddoo is packed with:",
    type: "list",
    content: [
      "Protein from nuts",
      "Natural sweetness from dates",
      "Iron and fiber from seeds and ragi",
      "Clean energy without the sugar crash",
    ],
  },
  {
    title: "Amma-ma is here:",
    type: "list",
    content: [
      "For the student skipping meals.",
      "For the mother managing it all.",
      "For the father looking for better snacks.",
      "For anyone trying to eat better – but doesn't know where to start.",
    ],
  },
  {
    title: "Amma-ma brings you:",
    type: "list",
    content: [
      "A bite of wellness.",
      "A memory of home.",
      "A gift of real nutrition – in every sweet.",
    ],
  },
];
