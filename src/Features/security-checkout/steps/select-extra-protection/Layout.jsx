import React, { useState } from 'react'
import ExtraProtectionCard from './component/ExtraProtectionCard'

const extraProtectionData = [
  {
    id: 1,
    name: "Wyze Battery Cam Pro",
    price: 89.98,
    description: "Protect anywhere, see everything in 2.5K HDR. No power outlet or electrical wiring needed.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Professional Monitoring",
    price: 9.99,
    period: "mo",
    description: "24/7 professional monitoring for peace of mind.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Extended Warranty",
    price: 4.99,
    period: "mo",
    description: "Extended warranty and priority support.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Installation Service",
    price: 99.00,
    description: "Professional installation for your security system.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4 4h1m-1 4h1" />
      </svg>
    ),
  }
]

function Layout() {
  const [items, setItems] = useState(
    extraProtectionData.map(item => ({ ...item, quantity: 0, isSelected: false }))
  )

  const handleSelect = (id) => {
    setItems(prev => prev.map(item => {
      if (item.id !== id) return item
      const newSelected = !item.isSelected
      return {
        ...item,
        isSelected: newSelected,
        quantity: newSelected ? 1 : 0
      }
    }))
  }

  const handleQuantityChange = (id, newQuantity) => {
    setItems(prev => prev.map(item => {
      if (item.id !== id) return item
      return {
        ...item,
        quantity: Math.max(0, newQuantity),
        isSelected: newQuantity > 0
      }
    }))
  }

  return (
    <div>
      <div className="flex gap-6 justify-center mb-8">
        {items.map((item) => {
          const totalPrice = item.price * item.quantity
          
          return (
            <ExtraProtectionCard
              key={item.id}
              name={item.name}
              price={item.price}
              period={item.period}
              description={item.description}
              icon={item.icon}
              isSelected={item.isSelected}
              onSelect={() => handleSelect(item.id)}
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
              totalPrice={totalPrice}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Layout