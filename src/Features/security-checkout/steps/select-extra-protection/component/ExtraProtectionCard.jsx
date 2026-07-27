import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function ExtraProtectionCard({
  accessory
}) {
  const { incrementAccessoryQuantity, decrementAccessoryQuantity } = useBundleBuilderStore()
  const { name, price, period, description, icon, quantity } = accessory
  const isSelected = quantity > 0
  const totalPrice = price * quantity
  return (
      <div
        className={`relative bg-white rounded-lg border-2 p-3 sm:p-4 w-full transition-all ${
          isSelected ? "border-purple-600" : "border-gray-200"
        }`}
      >
      {/* Checkbox */}
      <div className="flex justify-start mb-2">
        <div
          className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
            isSelected ? "bg-purple-600 border-purple-600" : "border-gray-300 bg-white"
          }`}
        >
          {isSelected && (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full ${isSelected ? "bg-purple-100" : "bg-gray-100"}`}>
          {icon}
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-center text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">
        {name}
      </h3>

      {/* Price */}
      <p className="text-center text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
        ${price.toFixed(2)}
        {period && <span className="text-sm font-normal text-gray-500">/{period}</span>}
      </p>

      {/* Description */}
      <p className="text-center text-xs text-gray-600 mb-3 sm:mb-4 px-1 sm:px-2">
        {description}
      </p>

      {/* Quantity and Total */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        {/* Quantity Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 border border-gray-300 rounded-md">
          <button
            onClick={() => decrementAccessoryQuantity(accessory.id)}
            disabled={quantity === 0}
            className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            −
          </button>
          <span className="px-1.5 sm:px-2 text-sm font-medium min-w-[20px] text-center">{quantity}</span>
          <button
            onClick={() => incrementAccessoryQuantity(accessory.id)}
            className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <div className="flex items-center">
          <span className={`text-base sm:text-lg font-semibold ${isSelected ? "text-purple-600" : "text-gray-900"}`}>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ExtraProtectionCard