import { useState } from "react";
import { cn } from "@/Shared/lib/utils";

function AccordionItem({ 
  step, 
  title, 
  isOpen, 
  onClick, 
  children, 
  className
}) {
  return (
    <div className={cn("border border-gray-200 rounded-lg", className)}>
      <button
        onClick={onClick}
        className={cn(
          "w-full text-left transition-colors",
          "bg-slate-50",
          isOpen && "bg-[#EDF4FF]"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3.5">
          <span className="text-[11px] text-gray-500 uppercase tracking-wider font-normal">
            {step}
          </span>
          <svg
            className={cn(
              "w-5 h-5 text-gray-400 transition-transform duration-200",
              isOpen && "transform rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="h-px w-full bg-gray-200"></div>
        <div className="px-4 py-3.5">
          <h3 className="font-medium text-xl text-gray-900">{title}</h3>
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className={cn("p-6", isOpen && "bg-[#EDF4FF]")}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Accordion({ items, className, defaultOpenIndex = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNextStep = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < items.length) {
      setOpenIndex(nextIndex);
    }
  };

  const getNextStepLabel = (index) => {
    const nextIndex = index + 1;
    if (nextIndex < items.length && items[nextIndex]) {
      return items[nextIndex].title;
    }
    return null;
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          step={item.step}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.content}
          {openIndex === index && getNextStepLabel(index) && (
            <div className="mt-6 w-fit mx-auto">
              <button
                onClick={() => handleNextStep(index)}
                className="border border-primary text-primary bg-transparent h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Next: {getNextStepLabel(index)}
              </button>
            </div>
          )}
        </AccordionItem>
      ))}
    </div>
  );
}

export { Accordion, AccordionItem };
export default Accordion;