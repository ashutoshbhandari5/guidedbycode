import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import Testimonials from "@/components/sections/testimonials";
import StackingCards from "@/components/stackingCards";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <StackingCards/>
      <Powered />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      <Features />
      <Testimonials />
    </>
  );
}
