import BackgroundGrid from "@/components/sections/backgroundGrid";
import HeroLanding from "@/components/sections/hero-landing";
import { LearningTimeline } from "@/components/sections/learningTimeline";
import Testimonials from "@/components/sections/testimonials";
import StackingCards from "@/components/stackingCards";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <StackingCards />
      <BackgroundGrid />
      <LearningTimeline />
      <Testimonials />
    </>
  );
}
