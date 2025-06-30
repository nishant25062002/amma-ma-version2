import { Footer, Navbar, TermsAndConditionsSection } from "@/components";
import React from "react";

const TermsAndConditions = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <TermsAndConditionsSection />
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
