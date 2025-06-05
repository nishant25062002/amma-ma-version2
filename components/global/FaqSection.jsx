// components/FaqSection.jsx
import { Faq, Heading, Text } from "@/components";

const faqData = [
  {
    question: "What is the shelf life?",
    answer:
      "Our sugar-free sweets have a shelf life of approximately three months when stored correctly. Keep them in a cool, dry place away from direct sunlight. For the best taste, consume them within the first month.",
  },
  {
    question: "How should I store?",
    answer:
      "Store our sweets in an airtight container to maintain freshness. A cool, dry environment is ideal for preserving their texture and flavour. Avoid refrigeration, as it may alter the consistency.",
  },
  {
    question: "Are there allergens present?",
    answer:
      "Our sweets are made with natural ingredients, but they may contain nuts and dried fruits. Always check the ingredient list for specific allergen information. If you have allergies, please consult with us before consumption.",
  },
  {
    question: "Can I gift these?",
    answer:
      "Absolutely! Our sugar-free sweets make perfect gifts for any occasion. You can choose from a variety of flavours and packaging options to suit your gifting needs.",
  },
  {
    question: "Are there allergens present?",
    answer:
      "We're here to help! If you have any further questions, please reach out to our customer service team. Your satisfaction is our priority.",
  },
];

export default function FaqSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-[5rem] flex flex-col items-center">
      <Heading level="h2" align="center" className="mb-[1.5rem]">
        FAQs
      </Heading>
      <Text size="medium" align="center" className="mb-[3rem] md:mb-[5rem]">
        Find answers to your questions about our sugar-free sweets and how to
        enjoy them.
      </Text>

      <div className="flex flex-col gap-[1rem] max-w-[50rem]">
        {faqData.map((faq, index) => (
          <Faq key={index} faq={faq} index={index} />
        ))}
      </div>
    </section>
  );
}
