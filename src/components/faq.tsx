"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take?",
    answer: "Usually about a minute.",
  },
  {
    question: "Do I need to know code?",
    answer: "No.",
  },
  {
    question: "What if I don't know what to write?",
    answer: "We'll fill in the blanks. Just describe your business or idea in one sentence.",
  },
  {
    question: "Can I edit it later?",
    answer: "Yes. $1 per edit. Describe the change, get an updated link.",
  },
  {
    question: "Is it mobile friendly?",
    answer: "Yes. Every capsule website is responsive and looks great on all devices.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">FAQ</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
