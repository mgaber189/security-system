import React from "react";
import Accordion from "@/Features/security-checkout/component/Accordion";
import SelectCameraLayout from "@/Features/security-checkout/steps/select-camera/Layout";
import SelectPlanLayout from "@/Features/security-checkout/steps/select-plan/Layout";

function SecurityCheckoutLayout() {
  const accordionItems = [
    {
      step: "STEP 1 OF 4",
      title: "Choose your cameras",
      content: (
        <div className="text-gray-600">
          <SelectCameraLayout />
        </div>
      )
    },
    {
      step: "STEP 2 OF 4",
      title: "Choose your plan",
      content: (
        <div className="text-gray-600">
          <SelectPlanLayout />
        </div>
      )
    },
    {
      step: "STEP 3 OF 4",
      title: "Choose your sensors",
      content: (
        <div className="text-gray-600">
          <p>Sensor selection content goes here...</p>
        </div>
      )
    },
    {
      step: "STEP 4 OF 4",
      title: "Add extra protection",
      content: (
        <div className="text-gray-600">
          <p>Extra protection options go here...</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Accordion items={accordionItems} defaultOpenIndex={0} />
      </div>
    </div>
  );
}

export default SecurityCheckoutLayout;
