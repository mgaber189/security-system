import React, { useState } from 'react'
import SensorsCard from './component/SensorsCard'
import sensorsData from '../../data/sensors.js'

function SelectSensorsLayout() {
  const [sensors, setSensors] = useState(sensorsData)

  const handleQuantityChange = (sensorId, newQuantity) => {
    setSensors(prev => prev.map(sensor => 
      sensor.id === sensorId 
        ? { ...sensor, quantity: Math.max(0, newQuantity) }
        : sensor
    ))
  }

  const handleCheckChange = (sensorId, isChecked) => {
    setSensors(prev => prev.map(sensor => 
      sensor.id === sensorId 
        ? { ...sensor, isSelected: isChecked }
        : sensor
    ))
  }

  return (
    <div className="w-full">
      <div className="flex gap-4">
        {sensors.map((sensor) => (
          <SensorsCard
            key={sensor.id}
            image={sensor.image}
            name={sensor.name}
            price={sensor.price}
            quantity={sensor.quantity}
            onQuantityChange={(newQuantity) => handleQuantityChange(sensor.id, newQuantity)}
            total={sensor.price * sensor.quantity}
            isSelected={sensor.isSelected || false}
            onCheckChange={(checked) => handleCheckChange(sensor.id, checked)}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectSensorsLayout