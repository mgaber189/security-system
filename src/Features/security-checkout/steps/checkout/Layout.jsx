import React from 'react'
import useBundleBuilderStore from '../../store/useBundleBuilderStore'
import CamerasSection from './components/CamerasSection'
import SensorsSection from './components/SensorsSection'
import AccessoriesSection from './components/AccessoriesSection'
import PlanSection from './components/PlanSection'
import ShippingSection from './components/ShippingSection'
import SummarySection from './components/SummarySection'

function CheckoutLayout() {
  const cameras = useBundleBuilderStore(state => state.cameras)
  const sensors = useBundleBuilderStore(state => state.sensors)
  const accessories = useBundleBuilderStore(state => state.accessories)

  const selectedCamerasCount = cameras.reduce((total, camera) => {
    return total + camera.colors.reduce((sum, color) => sum + color.quantity, 0)
  }, 0)
  const selectedSensorsCount = sensors.reduce((sum, sensor) => sum + sensor.quantity, 0)
  const selectedAccessoriesCount = accessories.reduce((sum, acc) => sum + acc.quantity, 0)

  return (
    <div className="space-y-6 bg-[#EDF4FF] p-10 rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-900">Your security system</h2>
      <p className="text-gray-600">
        Review your personalized protection system designed to keep what matters most safe.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CamerasSection />
          {selectedSensorsCount > 0 && <SensorsSection />}
          {selectedAccessoriesCount > 0 && <AccessoriesSection />}
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