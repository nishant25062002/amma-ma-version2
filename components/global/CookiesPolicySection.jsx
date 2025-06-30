import React from "react";
import { Heading, Text } from "..";

const CookiesPolicySection = ({ className }) => {
  return (
    <section
      className={`px-4 py-[4rem] md:py-[5rem] max-w-4xl mx-auto ${className}`}
    >
      <Heading level="h1" className="text-center mb-2">
        Cookies Policy
      </Heading>
      <Text align="center" size="medium" className="mb-[3rem]">
        Effective Date: June 15, 2025
      </Text>

      <div className="flex flex-col gap-[1rem]">
        <div>
          <Heading level="h3" className="mb-4">
            1. What Are Cookies?
          </Heading>
          <Text className="mb-6">
            Cookies are small text files stored on your device to help websites
            function properly and personalise your experience.
          </Text>
        </div>

        <div>
          <Heading level="h3" className="mb-4">
            2. Why We Use Cookies
          </Heading>
          <ul className="list-disc list-inside mb-6 text-[1rem] leading-relaxed text-[#333]">
            <li>Remember your preferences (e.g. cart items)</li>
            <li>Analyse website performance</li>
            <li>Improve navigation and product visibility</li>
          </ul>
        </div>

        <div>
          <Heading level="h3" className="mb-4">
            3. Managing Cookies
          </Heading>
          <Text>
            You can control and delete cookies via your browser settings.
            Disabling cookies may impact certain features of the website.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicySection;
