import React from 'react'
import PlanCard from './component/PlanCard'
import { plans } from '@/Features/security-checkout/data/plans'

function SelectPlanLayout() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectPlanLayout