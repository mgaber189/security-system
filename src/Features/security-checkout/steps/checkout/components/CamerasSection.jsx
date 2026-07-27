import React from 'react'
import useBundleBuilderStore from '../../../store/useBundleBuilderStore'

function CamerasSection() {
  const cameras = useBundleBuilderStore(state => state.cameras)
  const { incrementCameraQuantity, decrementCameraQuantity } = useBundleBuilderStore()

  const selectedCameras = cameras.reduce((acc, camera) => {
    camera.colors.forEach(color => {
      if (color.quantity > 0) {
        acc.push({ ...camera, color })
      }
    })
    return acc
  }, [])

  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Cameras</h3>
      <div className="space-y-3">
        {selectedCameras.map((camera) => {
          const totalPrice = camera.price * camera.color.quantity
          const originalTotal = camera.originalPrice * camera.color.quantity
          
          return (
            <div key={`${camera.id}-${camera.color.id}`} className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <img src={camera.image} alt={camera.name} className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="font-medium text-gray-900">{camera.name}</h4>
                  <p className="text-sm text-gray-600">{camera.color.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-gray-300 rounded-md">
                  <button
                    onClick={() => decrementCameraQuantity(camera.id, camera.color.id)}
                    disabled={camera.color.quantity === 0}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <span className="px-2 text-sm font-medium min-w-[20px] text-center">{camera.color.quantity}</span>
                  <button
                    onClick={() => incrementCameraQuantity(camera.id, camera.color.id)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">${originalTotal.toFixed(2)}</span>
                  <span className="font-semibold text-blue-600">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CamerasSection