import React from "react";

import { faqs } from "@/config/landing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import MaxWidthWrapper from "../shared/max-width-wrapper";

const Faq = () => {
  const words = [
    {
      text: "I'm here",
    },
    {
      text: "to answer",
    },
    {
      text: "all",
    },
    {
      text: "your",
    },
    {
      text: "questions.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <p className="text-xl font-bold text-neutral-600 dark:text-neutral-200">
        All of your doubts ends here!
      </p>
      <TypewriterEffectSmooth words={words} />
      <MaxWidthWrapper className="max-w-screen-md">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </div>
  );
};

export default Faq;
