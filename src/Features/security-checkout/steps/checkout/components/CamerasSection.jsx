import React from 'react'

function CamerasSection() {
  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Cameras</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <img src="/cameras/pngwing.com.png" alt="Wyze Cam v4" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium text-gray-900">Wyze Cam v4</h4>
              <p className="text-sm text-gray-600">White</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md">
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
              <span className="px-2 text-sm font-medium min-w-[20px] text-center">1</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 line-through">$35.98</span>
              <span className="font-semibold text-blue-600">$27.98</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <img src="/cameras/pngwing.com (1).png" alt="Wyze Cam Pan v3" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium text-gray-900">Wyze Cam Pan v3</h4>
              <p className="text-sm text-gray-600">White</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md">
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
              <span className="px-2 text-sm font-medium min-w-[20px] text-center">2</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 line-through">$57.98</span>
              <span className="font-semibold text-blue-600">$47.98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CamerasSection