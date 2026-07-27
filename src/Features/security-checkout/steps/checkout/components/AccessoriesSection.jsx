import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function AccessoriesSection() {
  const allAccessories = useBundleBuilderStore(state => state.accessories)
  const { incrementAccessoryQuantity, decrementAccessoryQuantity } = useBundleBuilderStore()

  const accessories = allAccessories.filter(accessory => accessory.quantity > 0)

  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Accessories</h3>
      <div className="space-y-3">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center text-gray-600">
                {accessory.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{accessory.name}</h4>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md">
                <button
                  onClick={() => decrementAccessoryQuantity(accessory.id)}
                  disabled={accessory.quantity === 0}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  −
                </button>
                <span className="px-2 text-sm font-medium min-w-[20px] text-center">{accessory.quantity}</span>
                <button
                  onClick={() => incrementAccessoryQuantity(accessory.id)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span className="font-semibold text-blue-600">${(accessory.price * accessory.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccessoriesSection