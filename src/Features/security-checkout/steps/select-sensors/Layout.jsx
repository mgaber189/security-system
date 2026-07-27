import React from 'react'
import SensorsCard from './component/SensorsCard'
import useBundleBuilderStore from '../../store/useBundleBuilderStore'

function SelectSensorsLayout() {
  const sensors = useBundleBuilderStore(state => state.sensors)

  return (
    <div className="w-full">
      <div className="flex gap-4">
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