import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { dataFAQs } from "@/data/content";

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

type TSingleItem = {
  id: string;
  question: string;
  answer: string;
};

const SingleItem = ({ id, question, answer }: TSingleItem) => {
  return (
    <AccordionItem
      value={id}
      className="overflow-hidden rounded-xl border-b-0 bg-secondary-foreground/10 md:rounded-3xl [&[data-state=open]]:bg-secondary-foreground/100"
    >
      <AccordionTrigger
        className={cn(
          buttonVariants({
            variant: "link",
            size: "default",
            className:
              "h-max justify-between rounded-none py-3 text-start font-display text-base font-semibold hover:no-underline [&[data-state=open]]:text-white",
          }),
        )}
      >
        {question}
      </AccordionTrigger>
      <AccordionContent>
        <p className="px-4 text-base text-white">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};
