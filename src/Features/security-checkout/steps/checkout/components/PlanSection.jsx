import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function PlanSection() {
  const selectedPlan = useBundleBuilderStore(state => state.selectedPlan)

  if (!selectedPlan) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Plan</h3>
        <p className="text-gray-500">No plan selected</p>
      </div>
    )
  }

  const originalPrice = selectedPlan.price / (1 - selectedPlan.discount / 100)

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Plan</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-purple-600 font-semibold">Cam</span>
          <span className="font-semibold text-gray-900">{selectedPlan.planName.replace('Cam ', '')}</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}/mo</span>
          <span className="text-sm font-semibold text-blue-600 ml-2">${selectedPlan.price.toFixed(2)}/mo</span>
        </div>
      </div>
    </div>
  )
}

export default PlanSection