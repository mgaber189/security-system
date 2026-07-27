import React from "react";
import Accordion from "@/Features/security-checkout/component/Accordion";
import SelectCameraLayout from "@/Features/security-checkout/steps/select-camera/Layout";
import SelectPlanLayout from "@/Features/security-checkout/steps/select-plan/Layout";
import SelectSensorsLayout from "@/Features/security-checkout/steps/select-sensors/Layout";
import SelectExtraProtectionLayout from "@/Features/security-checkout/steps/select-extra-protection/Layout";
import CheckoutLayout from "@/Features/security-checkout/steps/checkout/Layout";

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
        <SelectSensorsLayout />
      )
    },
    {
      step: "STEP 4 OF 4",
      title: "Add extra protection",
      content: (
        <div className="text-gray-600">
          <SelectExtraProtectionLayout />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="flex flex-col 2xl:flex-row lg:items-start gap-6 lg:gap-8 xl:gap-10">
          {/* Left Column - Accordion Steps (2/3 width) */}
          <div className="w-full lg:flex-[2] min-w-0">
            <Accordion items={accordionItems} defaultOpenIndex={0} />
          </div>

          {/* Right Column - Checkout Summary (1/3 width, sticky on large screens) */}
          <div className="w-full lg:flex-1 flex-shrink-0 lg:sticky lg:top-20">
            <CheckoutLayout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityCheckoutLayout;