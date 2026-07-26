import React from 'react'
import CamerasSection from './components/CamerasSection'
import SensorsSection from './components/SensorsSection'
import AccessoriesSection from './components/AccessoriesSection'
import PlanSection from './components/PlanSection'
import ShippingSection from './components/ShippingSection'
import SummarySection from './components/SummarySection'

function CheckoutLayout() {
  return (
    <div className="space-y-6 bg-[#EDF4FF] p-10 rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-900">Your security system</h2>
      <p className="text-gray-600">
        Review your personalized protection system designed to keep what matters most safe.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CamerasSection />
          <SensorsSection />
          <AccessoriesSection />
        </div>

        <div className="lg:col-span-1 space-y-4">
          <PlanSection />
          <ShippingSection />
          <SummarySection />
        </div>
      </div>
    </div>
  )
}

export default CheckoutLayout