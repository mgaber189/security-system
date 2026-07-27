import React from 'react'
import SensorsCard from './component/SensorsCard'
import useBundleBuilderStore from '../../store/useBundleBuilderStore'

function SelectSensorsLayout() {
  const sensors = useBundleBuilderStore(state => state.sensors)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
        {sensors.map((sensor) => (
          <SensorsCard
            key={sensor.id}
            sensor={sensor}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectSensorsLayout