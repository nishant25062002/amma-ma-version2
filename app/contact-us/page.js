import {
  BrandGrid,
  ContactInfoSection,
  ContactSection,
  Footer,
  Navbar,
  SubscribeSection,
  TrustBadgesSlider,
} from "@/components";
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
