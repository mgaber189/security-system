import React from "react";
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function PlanCard({
  plan
}) {
  const { selectedPlan, setSelectedPlan } = useBundleBuilderStore()
  const { id, planName, price, period, features, discount } = plan
  const isSelected = selectedPlan?.id === id
  return (
      <div
        onClick={() => setSelectedPlan(plan)}
        className={`relative rounded-lg border-2 p-6 w-full cursor-pointer transition-all ${isSelected ? "border-purple-600 shadow-md" : "border-gray-200 hover:border-purple-300"}`}>
      {/* Discount Badge */}
      {discount && (
        <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {discount}% OFF
        </div>
      )}

      {/* Shield Icon */}
      <div className="flex justify-center mb-4">
        <div
          className={`p-2 rounded-full ${isSelected ? "bg-purple-600" : "bg-purple-100"}`}>
          <svg
            className={`w-6 h-6 ${isSelected ? "text-white" : "text-purple-600"}`}
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 1l7 4v5c0 5.5-3.5 10-7 12-3.5-2-7-6.5-7-12V5l7-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Plan Name */}
      <h3
        className={`text-center text-lg font-semibold mb-2 ${isSelected ? "text-purple-600" : "text-gray-900"}`}>
        {planName}
      </h3>

      {/* Price */}
      <p
        className={`text-center text-2xl font-bold mb-4 ${isSelected ? "text-purple-600" : "text-gray-900"}`}>
        ${price.toFixed(2)}
        <span className="text-sm font-normal text-gray-500">/{period}</span>
      </p>

      {/* Features List */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {feature.included ? (
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span
              className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanCard;