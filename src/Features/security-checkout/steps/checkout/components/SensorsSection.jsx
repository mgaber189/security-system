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
          <div key={sensor.id} className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <img src={sensor.image} alt={sensor.name} className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-medium text-gray-900">{sensor.name}</h4>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md">
                <button
                  onClick={() => decrementSensorQuantity(sensor.id)}
                  disabled={sensor.quantity === 0}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  −
                </button>
                <span className="px-2 text-sm font-medium min-w-[20px] text-center">{sensor.quantity}</span>
                <button
                  onClick={() => incrementSensorQuantity(sensor.id)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span className="font-semibold text-blue-600">${(sensor.price * sensor.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SensorsSection