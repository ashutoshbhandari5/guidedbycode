"use client";

import { pricingData } from "@/config/subscriptions";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export function PricingCards() {
  const PricingCard = ({ offer }: { offer: (typeof pricingData)[0] }) => {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.title.toLocaleLowerCase().includes("7-")
            ? "-m-0.5 border-2 border-purple-400"
            : "",
        )}
        key={offer.title}
      >
        <div className="min-h-[170px] items-start space-y-4 bg-muted/50 p-6">
          <p className="text-lg font-bold">{offer.title}</p>
          <p className="text-sm text-muted-foreground">{offer.description}</p>

          <div className="mt-4 text-3xl font-semibold leading-6">
            {offer.price.isPaid
              ? offer.price.amount
                ? `Rs${offer.price.amount}`
                : "Let's Talk!"
              : "Free"}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between gap-6 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="size-5 shrink-0 text-purple-500" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          {/* <Button
            variant={
              offer.price.isPaid && offer.price.amount ? "default" : "outline"
            }
            rounded="full"
          >
            {offer.price.isPaid ? "Get Started" : "Learn More"}
          </Button> */}
        </div>
      </div>
    );
  };

  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center text-center">
        <HeaderSection
          label="Pricing"
          title="Choose the plan that works for you"
        />

        <div className="grid gap-5 bg-inherit py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((offer, index) => (
            <PricingCard offer={offer} key={index} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
