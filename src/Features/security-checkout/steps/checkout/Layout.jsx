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
    <div className="bg-[#EDF4FF] p-4 sm:p-6 rounded-xl">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Your security system</h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-4">
        Review your personalized protection system.
      </p>

      <CamerasSection />
      {selectedSensorsCount > 0 && <SensorsSection />}
      {selectedAccessoriesCount > 0 && <AccessoriesSection />}

      <PlanSection />
      <ShippingSection />
      <SummarySection />
    </div>
  )
}

export default CheckoutLayout