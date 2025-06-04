"use client";

import AnimatedText from "@/components/AnimatedText";
import { useContext } from "react";
import { ConfigContext } from "@/utils/configContext";
import NeonHexagon from "@/public/svg/neonHexagon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "@/lib/motion";

function Faq() {
  const {
    home: { faq },
  } = useContext(ConfigContext);

  if (!faq) return null;

  return (
    <section id={faq.id} className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="mt-16 my-0 md:my-8 flex flex-col md:flex-row">
        <div className="relative flex-1 flex items-center">
          <NeonHexagon />
          <div className="h-full w-full flex items-center justify-center">
            <h3 className="text-center font-roboto text-3xl leading-tight flex flex-col items-center mb-8 md:mb-0 md:text-left">
              <AnimatedText text={faq.title} initial={{ y: "0%" }} />
            </h3>
          </div>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full py-10">
            {faq.qa.map((qa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="px-4 py-4 border-b-1 border-primary hover:no-underline hover:bg-primary/15">
                    <span className="text-lg font-medium text-left">{qa.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-lg bg-muted opacity-70">{qa.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
