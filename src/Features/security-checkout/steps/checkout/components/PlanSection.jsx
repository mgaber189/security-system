import React from 'react'

function PlanSection() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Plan</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-purple-600 font-semibold">Cam</span>
          <span className="font-semibold text-gray-900">Unlimited</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500 line-through">$12.99/mo</span>
          <span className="text-sm font-semibold text-blue-600 ml-2">$9.99/mo</span>
        </div>
      </div>
    </div>
  )
}

export default PlanSection