import {
  Navbar,
  SubscribeSection,
  Footer,
  VideoSection,
  CtaSection,
  DescriptionSection,
} from "@/components";

export default function OurStoryPage() {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      {/* VideoSection */}
      <VideoSection />

      {/* StoryWithTimeline */}
      {/* <StoryWithTimeline /> */}
      <DescriptionSection />

      {/* LegacySection */}
      {/* <LegacySection /> */}

      {/* StoryFeatureSection */}
      {/* <StoryFeatureSection /> */}

      {/* HeroFeature */}
      {/* <HeroFeature /> */}

      {/* MissionSection */}
      {/* <MissionSection /> */}

      {/* TimelineSection */}
      {/* <TimelineSection /> */}

      {/*  This section is new in present version*/}
      {/* <CommunityAudienceSection /> */}

      {/* TestimonialSection */}
      {/* <TestimonialSection /> */}

      {/* <FeatureSection /> */}

      {/* CtaSection */}
      <CtaSection />

      {/* SubscribeSection */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
