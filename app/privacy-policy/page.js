import { Footer, Navbar, PrivacyPolicySection } from "@/components";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <PrivacyPolicySection />
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
