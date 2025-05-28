// components/CtaSection.js
import { Heading, Text, Button } from "..";

export default function CtaSection() {
  return (
    <section className="py-[2rem] md:py-[5rem] px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <Heading level="h2" align="center" className="mb-[1.5rem]">
          Discover Our Delicious Sweets
        </Heading>

        <Text size="regular" className="mb-[2rem] max-w-2xl mx-auto">
          Indulge in our guilt-free, sugar-free South Indian sweets made with
          love and premium ingredients.
        </Text>

        <div className="flex flex-col sm:flex-row justify-center gap-[1rem]">
          <Button variant="solid" color="green">
            Shop Now
          </Button>
          {/* <Button variant="outline" color="green">
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  );
}
