import React from 'react'

function SummarySection() {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <div className="text-right">
          <span className="text-sm text-gray-500 line-through">$238.81</span>
          <span className="text-3xl font-bold text-gray-900 ml-2">$187.89</span>
        </div>
      </div>

      <button className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-700 transition-colors">
        Checkout
      </button>

      <p className="text-center text-sm text-gray-600">
        You're saving <span className="text-green-600 font-medium">$50.92</span> on your security bundle!
      </p>

      <p className="text-center">
        <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline">
          Save my system for later
        </a>
      </p>

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