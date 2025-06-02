import {
  BrandGrid,
  ContactInfoSection,
  ContactSection,
  Footer,
  Navbar,
  SubscribeSection,
} from "@/components";
import React from "react";

const ContactUs = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <ContactSection />
      <BrandGrid />
      <ContactInfoSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
};

export default ContactUs;
