import React from 'react'

function ShippingSection() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Shipping</h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2M5 8a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2" />
          </svg>
          <span className="text-gray-900 text-sm sm:text-base">Fast Shipping</span>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-xs sm:text-sm text-gray-500 line-through">$5.99</span>
          <span className="text-xs sm:text-sm font-semibold text-green-600 ml-1.5 sm:ml-2">FREE</span>
        </div>
      </div>
    </div>
  )
}

export default ShippingSection