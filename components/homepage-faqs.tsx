import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { dataFAQs } from "@/data/content";

export const HomepageFAQs = () => {
  return (
    <section className="section bg-gray-100 px-6 py-16">
      <div className="container">
        <div className="flex flex-col">
          <h2 className="h2 font-display font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
            <Link href="/" className="font-semibold text-primary underline">
              customer support
            </Link>{" "}
            team.
          </p>

          {/* FAQ */}
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full justify-between gap-x-8 sm:columns-2 md:gap-x-10"
    >
      {dataFAQs?.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="">
          <AccordionTrigger className="text-start">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
