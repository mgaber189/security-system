import React from 'react'

function SensorsCard({ 
  image, 
  name, 
  price, 
  quantity, 
  onQuantityChange,
  total,
  isSelected,
  onCheckChange
}) {
  console.log(image)
  return (
    <div className="bg-white rounded-lg border border-purple-200 p-4 w-64 hover:shadow-lg transition-shadow">
      {/* Checkbox */}
      <div className="mb-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onCheckChange(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600 cursor-pointer"
        />
      </div>

      {/* Sensor Image */}
      <div className="flex justify-center items-center h-40 mb-3">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>

      {/* Sensor Name */}
      <h3 className="text-sm font-medium text-gray-900 mb-2 text-center">
        {name}
      </h3>

      {/* Price */}
      <p className="text-base font-semibold text-gray-900 mb-3 text-center">
        ${typeof price === 'number' ? price.toFixed(2) : price}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <button
          onClick={() => onQuantityChange(quantity - 1)}
          disabled={quantity === 0}
          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>
        <span className="text-sm font-medium min-w-[20px] text-center">{quantity}</span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <p className="text-lg font-semibold text-purple-600 text-center">
        ${typeof total === 'number' ? total.toFixed(2) : total}
      </p>
    </div>
  )
}

export default SensorsCard