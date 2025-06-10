// components/FaqSection.jsx
import { Button, Faq, Heading, Text } from "@/components";
import { faqData } from "@/data/global";

export default function FaqSection() {
  return (
    <section
      className="max-w-4xl w-full mx-auto py-[4rem] md:py-[5rem] px-4 md:px-8 flex flex-col items-center"
      id="faqs"
    >
      <Heading level="h2" align="center" className="mb-[1.5rem]">
        FAQs
      </Heading>
      <Text size="medium" align="center" className="mb-[3rem] md:mb-[5rem]">
        Find answers to your questions about our sugar-free sweets and how to
        enjoy them.
      </Text>

      <div className="flex flex-col gap-[1rem] max-w-[50rem] w-full">
        {faqData.map((faq, index) => (
          <Faq key={index} faq={faq} index={index} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-[3rem] md:mt-[5rem]">
        <Heading level="h4" align="center" className="mb-[1rem]">
          Still have questions?
        </Heading>
        <Text size="medium" align="center" className="mb-[1.5rem]">
          We're happy to assist you with any inquiries.
        </Text>
        <Button secondary>Contact</Button>
      </div>
    </section>
  );
}
