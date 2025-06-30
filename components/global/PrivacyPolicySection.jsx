import React from "react";
import { Heading, Text } from "..";

const PrivacyPolicySection = ({ className }) => {
  return (
    <section
      className={`px-4 py-[4rem] md:py-[5rem] max-w-4xl mx-auto ${className}`}
    >
      <Heading level="h1" className="text-center mb-2">
        Privacy Policy
      </Heading>
      <Text align="center" size="medium" className="mb-[3rem]">
        {`UK GDPR Compliant – Effective Date: June 15, 2025`}
      </Text>

      <div className="flex flex-col gap-[1rem]">
        <div>
          <Heading level="h3" className="my-[1.5rem]">
            1. What Data We Collect
          </Heading>
          <ul className="list-disc list-inside mb-6 text-[1rem] leading-relaxed text-[#333]">
            <li>Your name</li>
            <li>Email address</li>
            <li>Delivery address</li>
            <li>Mobile number</li>
            <li>Order history</li>
          </ul>
        </div>

        <div>
          <Heading level="h3" className="my-[1.5rem]">
            2. How We Use Your Data
          </Heading>
          <ul className="list-disc list-inside mb-6 text-[1rem] leading-relaxed text-[#333]">
            <li>Fulfil your orders</li>
            <li>Send updates and confirmation emails</li>
            <li>Handle inquiries or refund-related communication</li>
            <li>Improve our website and service experience</li>
          </ul>
        </div>

        <div>
          <Heading level="h3" className="my-[1.5rem]">
            3. Data Sharing
          </Heading>
          <Text className="mb-6">
            We do not sell or rent your data. We only share your information
            with:
          </Text>
          <ul className="list-disc list-inside mb-6 text-[1rem] leading-relaxed text-[#333]">
            <li>Delivery partners</li>
            <li>Payment processors</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </div>

        <div>
          <Heading level="h3" className="my-[1.5rem]">
            4. Your Rights Under UK GDPR
          </Heading>
          <ul className="list-disc list-inside mb-6 text-[1rem] leading-relaxed text-[#333]">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <Text className="mb-6">
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:ammamaorganic@gmail.com "
              className="text-[1rem] leading-[150%] text-black font-inter underline"
            >
              ammamaorganic@gmail.com
            </a>
            .
          </Text>
        </div>

        <div>
          <Heading level="h3" className="my-[1.5rem]">
            5. Data Security
          </Heading>
          <Text>
            We implement appropriate technical measures to protect your data
            from loss, misuse, or unauthorised access.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
