import { AllergenAdvisorySection, Footer, Navbar } from "@/components";
import React from "react";

const AllergenAdvisory = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <AllergenAdvisorySection />
      <Footer />
    </main>
  );
};

export default AllergenAdvisory;
