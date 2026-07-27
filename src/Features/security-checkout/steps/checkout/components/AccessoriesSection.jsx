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
          <div key={accessory.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg border border-gray-200 p-3 sm:p-4 gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-600 flex-shrink-0">
                {accessory.icon}
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{accessory.name}</h4>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 sm:gap-2 border border-gray-300 rounded-md">
                <button
                  onClick={() => decrementAccessoryQuantity(accessory.id)}
                  disabled={accessory.quantity === 0}
                  className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  −
                </button>
                <span className="px-1.5 sm:px-2 text-sm font-medium min-w-[20px] text-center">{accessory.quantity}</span>
                <button
                  onClick={() => incrementAccessoryQuantity(accessory.id)}
                  className="px-2 sm:px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm"
                >
                  +
                </button>
              </div>
              <span className="font-semibold text-primary text-sm sm:text-base">${(accessory.price * accessory.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccessoriesSection