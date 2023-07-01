import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqSmall } from "@/dummy";

export function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full justify-between gap-x-8 sm:columns-2 md:gap-x-10"
    >
      {faqSmall?.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="">
          <AccordionTrigger className="text-start">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
