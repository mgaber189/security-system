import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function SensorsSection() {
  const allSensors = useBundleBuilderStore(state => state.sensors)
  const { incrementSensorQuantity, decrementSensorQuantity } = useBundleBuilderStore()

  const sensors = allSensors.filter(sensor => sensor.quantity > 0)

  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Sensors</h3>
      <div className="space-y-3">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg border border-gray-200 p-3 sm:p-4 gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <img src={sensor.image} alt={sensor.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{sensor.name}</h4>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 sm:gap-2 border border-gray-300 rounded-md">
                <button
                  onClick={() => decrementSensorQuantity(sensor.id)}
                  disabled={sensor.quantity === 0}
                  className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  −
                </button>
                <span className="px-1.5 sm:px-2 text-sm font-medium min-w-[20px] text-center">{sensor.quantity}</span>
                <button
                  onClick={() => incrementSensorQuantity(sensor.id)}
                  className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm"
                >
                  +
                </button>
              </div>
<span className="font-semibold text-primary text-sm sm:text-base">${(sensor.price * sensor.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SensorsSection