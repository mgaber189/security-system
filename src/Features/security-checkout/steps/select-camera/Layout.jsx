import React, { useState } from 'react'
import CameraCard from './component/CameraCard'
import camerasData from '../../data/cameras.js'

function Layout() {
  const [cameras, setCameras] = useState(camerasData)

  const handleColorChange = (cameraId, colorId) => {
    setCameras(prev => prev.map(camera => 
      camera.id === cameraId 
        ? { ...camera, selectedColor: colorId }
        : camera
    ))
  }

  const handleQuantityChange = (cameraId, colorId, newQuantity) => {
    setCameras(prev => prev.map(camera => {
      if (camera.id !== cameraId) return camera
      
      const updatedColors = camera.colors.map(color => 
        color.id === colorId 
          ? { ...color, quantity: Math.max(0, newQuantity) }
          : color
      )
      
      return { ...camera, colors: updatedColors }
    }))
  }

  return (
    <div>
      <div className="flex gap-4">
        {cameras.map((camera) => {
          const selectedColorData = camera.colors.find(c => c.id === camera.selectedColor) || camera.colors[0]
          const safeQuantity = selectedColorData?.quantity ?? 0
          
          return (
            <CameraCard
              key={camera.id}
              discount={camera.discount}
              image={camera.image}
              name={camera.name}
              description={camera.description}
              colors={camera.colors}
              selectedColor={camera.selectedColor}
              onColorChange={(colorId) => handleColorChange(camera.id, colorId)}
              quantity={safeQuantity}
              onQuantityChange={(newQuantity) => handleQuantityChange(camera.id, camera.selectedColor, newQuantity)}
              price={camera.price}
              originalPrice={camera.originalPrice}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Layout