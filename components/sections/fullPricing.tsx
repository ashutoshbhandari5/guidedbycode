import { constructMetadata } from "@/lib/utils";
import { ComparePlans } from "@/components/pricing/compare-plans";
import { PricingCards } from "@/components/pricing/pricing-cards";

export const metadata = constructMetadata({
  title: "Pricing – SaaS Starter",
  description: "Explore our subscription plans.",
});

export default async function FullPricing() {
  return (
    <div className="flex w-full flex-col gap-16 md:py-8">
      <PricingCards />
      <hr className="container" />
      <ComparePlans />
    </div>
  );
}
