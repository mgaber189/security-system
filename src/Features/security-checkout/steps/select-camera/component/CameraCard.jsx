import React from 'react'

function CameraCard({ 
  discount, 
  image, 
  name, 
  description, 
  colors, 
  selectedColor, 
  onColorChange, 
  quantity, 
  onQuantityChange, 
  price, 
  originalPrice 
}) {
  console.log(image)
  return (
    <div className="bg-white rounded-lg border border-purple-200 p-4 w-64 hover:shadow-lg transition-shadow">
      {/* Discount Badge */}
      {discount && (
        <div className="inline-block bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md mb-3">
           {discount}
        </div>
      )}

      {/* Camera Image */}
      <div className="flex justify-center items-center h-40 mb-3">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">
        {description}{' '}
        <button className="text-blue-600 hover:underline">Learn More</button>
      </p>

      {/* Color Selection */}
      <div className="flex gap-2 mb-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorChange(color.id)}
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
      <div className="flex items-center justify-between">
        {/* Quantity Selector */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-md">
          <button
            onClick={() => onQuantityChange(quantity - 1)}
            disabled={quantity === 0}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            −
          </button>
          <span className="px-2 text-sm font-medium min-w-[20px] text-center">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Price Display */}
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-lg font-semibold text-red-600">
            ${price}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CameraCard