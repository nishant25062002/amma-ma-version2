import Image from "next/image";
import { FullGoogleLogo, FullMetaLogo, Tailwind_CSS_logo } from "@/public";
import Heading from "../global/Heading";

const logos = [
  { src: FullGoogleLogo, alt: "Webflow", name: "Google" },
  { src: FullMetaLogo, alt: "Relume", name: "facebook" },
  { src: Tailwind_CSS_logo, alt: "Webflow", name: "Google" },
  { src: FullMetaLogo, alt: "Relume", name: "facebook" },
  { src: FullGoogleLogo, alt: "Webflow", name: "Google" },
  { src: Tailwind_CSS_logo, alt: "Relume", name: "facebook" },
  { src: Tailwind_CSS_logo, alt: "Webflow", name: "Google" },
  { src: FullMetaLogo, alt: "Relume", name: "facebook" },
  { src: FullGoogleLogo, alt: "Webflow", name: "Google" },
  { src: FullMetaLogo, alt: "Relume", name: "facebook" },
];

export default function BrandGrid() {
  return (
    <section className="w-full bg-white py-[2rem] md:py-[5rem]">
      <div className="flex flex-col items-center justify-center gap-[1.25rem] md:gap-[3rem] max-width-1200 px-[1.25rem] text-center">
        <Heading as="h6" level="h6" family="poppins" weight="semibold">
          Trusted by renowned brands and partners worldwide
        </Heading>

        <div className="flex flex-wrap justify-center gap-[1rem] md:gap-[2rem] max-w-5xl mx-auto">
          {logos.map((logo, idx) => (
            <div key={idx} className="w-16 h-7 md:w-24 md:h-10 relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
