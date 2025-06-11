import {
  BrandGrid,
  ContactInfoSection,
  ContactSection,
  Footer,
  Navbar,
  SubscribeSection,
} from "@/components";
import TrustBadgesSlider from "@/components/global/popup/TrustBadgesSlider";
import React from "react";

const ContactUs = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <ContactSection />
      <BrandGrid className="!pt-0" />

      <TrustBadgesSlider />

      <ContactInfoSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
};

export default ContactUs;
