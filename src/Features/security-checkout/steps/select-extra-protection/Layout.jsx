import React, { useEffect } from 'react'
import ExtraProtectionCard from './component/ExtraProtectionCard'
import useBundleBuilderStore from '../../store/useBundleBuilderStore'
import extraProtectionData from '../../data/extraProtection.jsx'

function Layout() {
  const accessories = useBundleBuilderStore(state => state.accessories)
  const { incrementAccessoryQuantity, decrementAccessoryQuantity, setAccessories } = useBundleBuilderStore()

  // Initialize accessories in store if empty
  useEffect(() => {
    if (accessories.length === 0) {
      const initialAccessories = extraProtectionData.map(item => ({ ...item, quantity: 0 }))
      setAccessories(initialAccessories)
    }
  }, [])

  return (
    <div>
      <div className="flex gap-6 justify-center mb-8">
        {accessories.map((accessory) => (
          <ExtraProtectionCard
            key={accessory.id}
            accessory={accessory}
          />
        ))}
      </div>
    </div>
  )
}

export default Layout