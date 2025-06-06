// components/FaqSection.jsx
import { Faq, Heading, Text } from "@/components";
import { faqData } from "@/data/global";

export default function FaqSection() {
  return (
    <section
      className="max-w-4xl w-full mx-auto py-[4rem] md:py-[7rem] px-4 md:px-8 flex flex-col items-center"
      id="faqs"
    >
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
