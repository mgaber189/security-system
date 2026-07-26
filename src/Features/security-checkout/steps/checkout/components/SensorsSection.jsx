import React from 'react'

function SensorsSection() {
  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Sensors</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <img src="/sensors/pngwing.com (4).png" alt="Motion Sensor" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium text-gray-900">Wyze Sense Motion Sensor</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md">
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
              <span className="px-2 text-sm font-medium min-w-[20px] text-center">2</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
            </div>
            <span className="font-semibold text-blue-600">$59.98</span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <img src="/sensors/pngwing.com (5).png" alt="Hub" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium text-gray-900">Wyze Sense Hub (Required)</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md">
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
              <span className="px-2 text-sm font-medium min-w-[20px] text-center">1</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
            </div>
            <span className="font-semibold text-green-600">FREE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SensorsSection