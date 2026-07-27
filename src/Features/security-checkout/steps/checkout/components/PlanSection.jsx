import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function PlanSection() {
  const selectedPlan = useBundleBuilderStore(state => state.selectedPlan)

  if (!selectedPlan) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
        <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Plan</h3>
        <p className="text-gray-500 text-sm sm:text-base">No plan selected</p>
      </div>
    )
  }

  const discount = selectedPlan.discount || 0
  const originalPrice = discount > 0 ? selectedPlan.price / (1 - discount / 100) : selectedPlan.price

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Plan</h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-purple-600 font-semibold text-sm sm:text-base">Cam</span>
          <span className="font-semibold text-gray-900 text-sm sm:text-base">{selectedPlan.planName.replace('Cam ', '')}</span>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-xs sm:text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}/mo</span>
          <span className="text-xs sm:text-sm font-semibold text-primary ml-1.5 sm:ml-2">${selectedPlan.price.toFixed(2)}/mo</span>
        </div>
      </div>
    </div>
  )
}

export default PlanSection