"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

export function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-primary-dark/20 pb-2"
        >
          {}
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <h4 className="flex-1 text-lg font-semibold leading-normal text-primary-dark">
              {item.question}
            </h4>
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary p-[5px] transition-transform ${
                openIndex === index ? "" : "rotate-180"
              }`}
            >
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
              >
                <path
                  d="M10.941 5.88102L6.324 1.26402V13.999H5.324V1.26602L0.707 5.88302L0 5.17602L4.718 0.459023C5.013 0.163023 5.406 2.28882e-05 5.825 2.28882e-05C6.244 2.28882e-05 6.637 0.163023 6.931 0.459023L11.648 5.17502L10.941 5.88202V5.88102Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>

          {}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-3 py-2">
              <p className="text-md leading-normal text-primary-dark whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

