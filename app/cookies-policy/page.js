import { CookiesPolicySection, Footer, Navbar } from "@/components";
import React from "react";

const CookiesPolicy = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <CookiesPolicySection />

      <Footer />
    </main>
  );
};

export default CookiesPolicy;
