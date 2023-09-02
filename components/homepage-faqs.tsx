import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { dataFAQs } from "@/data/content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

export const HomepageFAQs = () => {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="container">
        <div className="flex flex-col">
          <h2 className="h2 text-gradient font-display font-extrabold">
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
          {/* <div className="mt-10">
            <FaqAccordion />
          </div> */}

          {/* Test */}
          <Accordion asChild type="single" collapsible>
            <div className="mt-10 grid gap-y-2 md:grid-cols-2 md:gap-x-16">
              <div className="space-y-2">
                {dataFAQs
                  .slice(0, 5)
                  ?.map((item) => (
                    <SingleItem
                      key={item.id}
                      id={item.id}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
              </div>

              <div className="space-y-2">
                {dataFAQs
                  .slice(5)
                  ?.map((item) => (
                    <SingleItem
                      key={item.id}
                      id={item.id}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
              </div>
            </div>
          </Accordion>
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
        <AccordionItem
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-3xl border"
        >
          <AccordionTrigger
            className={cn(
              buttonVariants({
                variant: "link",
                size: "default",
                className:
                  " justify-between rounded-none text-start font-semibold [&[data-state=open]]:bg-white",
              }),
            )}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="bg-white px-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

type TSingleItem = {
  id: string;
  question: string;
  answer: string;
};

const SingleItem = ({ id, question, answer }: TSingleItem) => {
  return (
    <AccordionItem
      value={id}
      className="overflow-hidden rounded-xl border md:rounded-3xl"
    >
      <AccordionTrigger
        className={cn(
          buttonVariants({
            variant: "link",
            size: "default",
            className:
              "h-max justify-between rounded-none py-3 text-start font-display text-sm font-semibold hover:no-underline [&[data-state=open]]:bg-secondary-foreground [&[data-state=open]]:text-white",
          }),
        )}
      >
        {question}
      </AccordionTrigger>
      <AccordionContent className="bg-secondary-foreground px-4 text-sm text-white">
        <Separator className="mb-3 bg-input" />
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
