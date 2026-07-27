import React, { useState } from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function SummarySection() {
  const cameras = useBundleBuilderStore(state => state.cameras)
  const sensors = useBundleBuilderStore(state => state.sensors)
  const accessories = useBundleBuilderStore(state => state.accessories)
  const selectedPlan = useBundleBuilderStore(state => state.selectedPlan)
  const { reset, clearSaved } = useBundleBuilderStore()
  const [saveMessage, setSaveMessage] = useState('')

  // Compute subtotal locally to avoid infinite re-renders from function selectors
  let subtotal = 0
  let originalTotal = 0

  cameras.forEach(camera => {
    camera.colors.forEach(color => {
      if (color.quantity > 0) {
        subtotal += camera.price * color.quantity
        originalTotal += camera.originalPrice * color.quantity
      }
    })
  })

  sensors.forEach(sensor => {
    if (sensor.quantity > 0) {
      subtotal += sensor.price * sensor.quantity
    }
  })

  accessories.forEach(accessory => {
    if (accessory.quantity > 0) {
      subtotal += accessory.price * accessory.quantity
      if (accessory.originalPrice) {
        originalTotal += accessory.originalPrice * accessory.quantity
      } else {
        originalTotal += accessory.price * accessory.quantity
      }
    }
  })

  if (selectedPlan) {
    const regularPrice = selectedPlan.price / (1 - selectedPlan.discount / 100)
    originalTotal += regularPrice
    subtotal += selectedPlan.price
  }

  const savings = originalTotal - subtotal

  const handleSaveForLater = () => {
    // The persist middleware already saves to localStorage automatically on every state change.
    // Explicitly notify the user and show a brief confirmation.
    setSaveMessage('System saved! It will be restored when you return.')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  const handleCheckout = () => {
    alert(`Proceeding to checkout with total: $${subtotal.toFixed(2)}`)
  }

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <div className="text-right">
          <span className="text-sm text-gray-500 line-through">${originalTotal.toFixed(2)}</span>
          <span className="text-3xl font-bold text-gray-900 ml-2">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <button 
        onClick={handleCheckout}
        className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Checkout
      </button>

      {savings > 0 && (
        <p className="text-center text-sm text-gray-600">
          You're saving <span className="text-green-600 font-medium">${savings.toFixed(2)}</span> on your security bundle!
        </p>
      )}

      <p className="text-center">
        <button 
          onClick={handleSaveForLater}
          className="text-sm text-gray-500 hover:text-gray-700 underline bg-transparent border-none cursor-pointer"
        >
          Save my system for later
        </button>
      </p>
      {saveMessage && (
        <p className="text-center text-sm text-green-600 font-medium transition-opacity duration-300">
          {saveMessage}
        </p>
      )}

      <div className="flex items-start gap-4 pt-4 mt-4 border-t border-gray-200">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-15deg]">
            <path
              id="circlePath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" className="text-[10px] font-medium text-gray-700">
                100% satisfaction guarantee
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">100%</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">30-day hassle-free returns</h4>
          <p className="text-sm text-gray-600 mt-1">
            If you're not totally in love with the product, we will refund you 100%.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SummarySection