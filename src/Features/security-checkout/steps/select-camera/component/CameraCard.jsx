import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function CameraCard({ 
  camera
}) {
  const { selectCameraColor, incrementCameraQuantity, decrementCameraQuantity } = useBundleBuilderStore()
  const { discount, image, name, description, colors, selectedColor, price, originalPrice } = camera
  
  const selectedColorData = colors.find(c => c.id === selectedColor) || colors[0]
  const quantity = selectedColorData?.quantity ?? 0
  return (
    <div className="bg-white rounded-lg border border-purple-200 p-3 sm:p-4 hover:shadow-lg transition-shadow w-full">
      {/* Discount Badge */}
      {discount && (
        <div className="inline-block bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md mb-3">
           Save {discount}%
        </div>
      )}

      {/* Camera Image */}
      <div className="flex justify-center items-center h-28 sm:h-32 md:h-40 mb-2 sm:mb-3">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>

      {/* Product Name */}
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
        {name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
        {description}{' '}
        <button className="text-blue-600 hover:underline">Learn More</button>
      </p>

      {/* Color Selection */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => selectCameraColor(camera.id, color.id)}
            className={`px-3 py-1 rounded-md border-2 text-xs font-medium transition-all ${
              selectedColor === color.id
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <span 
              className="inline-block w-3 h-3 rounded-full mr-1 border border-gray-300" 
              style={{ backgroundColor: color.hex }}
            ></span>
            {color.name}
          </button>
        ))}
      </div>

      {/* Quantity and Price */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        {/* Quantity Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 border border-gray-300 rounded-md">
          <button
            onClick={() => decrementCameraQuantity(camera.id, selectedColor)}
            disabled={quantity === 0}
            className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            −
          </button>
          <span className="px-1.5 sm:px-2 text-sm font-medium min-w-[20px] text-center">{quantity}</span>
          <button
            onClick={() => incrementCameraQuantity(camera.id, selectedColor)}
            className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm"
          >
            +
          </button>
        </div>

        {/* Price Display */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {originalPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-base sm:text-lg font-semibold text-red-600">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CameraCard