import React from 'react'

function AccessoriesSection() {
  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Accessories</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <img src="/cameras/pngwing.com (2).png" alt="MicroSD" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium text-gray-900">Wyze MicroSD Card (256GB)</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md">
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
              <span className="px-2 text-sm font-medium min-w-[20px] text-center">2</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
            </div>
            <span className="font-semibold text-blue-600">$41.96</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesSection