import React from "react";
import { Heading, Text } from "..";

const TermsAndConditionsSection = ({ className }) => {
  return (
    <section
      className={`px-4 py-[4rem] md:py-[5rem] max-w-4xl mx-auto ${className}`}
    >
      <Heading level="h1" className="text-center mb-2">
        Terms & Conditions
      </Heading>
      <Text align="center" size="medium" className="mb-[3rem]">
        Effective Date: June 15, 2025
      </Text>

      <div className="flex flex-col gap-[1rem]">
        <div>
          <Heading level="h3" className="mb-4">
            1. Who We Are
          </Heading>
          <Text className="mb-6">
            Amma-ma Foods is a UK-based brand offering handmade organic sweets
            that are sugar-free and preservative-free. We deliver across the
            United Kingdom.
          </Text>
        </div>

        <div>
          <Heading level="h3" className="mb-4">
            2. Ordering & Payments
          </Heading>
          <ul className="list-disc list-inside mb-6 text-[1rem] leading-relaxed text-[#333]">
            <li>Provide accurate delivery information</li>
            <li>Pay using accepted methods</li>
            <li>Receive confirmation and shipping updates</li>
            <li>All prices include applicable taxes</li>
          </ul>
        </div>

        <div>
          <Heading level="h3" className="mb-4">
            3. Shipping
          </Heading>
          <Text className="mb-6">
            We aim to dispatch all orders within [insert time, e.g. 1–2 working
            days]. Timelines may vary by location.
          </Text>
        </div>

        <div>
          <Heading level="h3" className="mb-4">
            4. Refund & Complaints Policy
          </Heading>
          <Text className="mb-4">
            Due to the perishable nature of our sweets, we generally do not
            offer refunds after delivery and consumption. However, we may offer
            refunds or replacements on a case-by-case basis.
          </Text>
          <Text className="mb-6">
            Please contact us at [insert contact email] within 48 hours of
            receiving your order. Each case will be assessed individually.
          </Text>
        </div>

        <div>
          <Heading level="h3" className="mb-4">
            5. Intellectual Property
          </Heading>
          <Text>
            All website content (images, text, branding) is owned by Amma-ma
            Foods and may not be reused without permission.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsSection;
