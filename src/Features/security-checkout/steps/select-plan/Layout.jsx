import React, { useState } from 'react'
import PlanCard from './component/PlanCard'
import { plans } from '@/Features/security-checkout/data/plans'

function SelectPlanLayout() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            planName={plan.planName}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            isSelected={selectedPlan === plan.id}
            onSelect={() => setSelectedPlan(plan.id)}
            discount={plan.discount}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectPlanLayout