export const plans = [
  {
    id: 'cam-unlimited',
    planName: 'Cam Unlimited',
    price: 9.99,
    period: 'mo',
    discount: 50,
    features: [
      { text: 'Unlimited video history', included: true },
      { text: 'Person detection', included: true },
      { text: 'Package detection', included: true },
      { text: 'Vehicle detection', included: true },
      { text: 'And more...', included: true }
    ]
  },
  {
    id: 'cam-plus',
    planName: 'Cam Plus',
    price: 5.99,
    period: 'mo',
    discount: 25,
    features: [
      { text: 'Unlimited video history', included: true },
      { text: 'Person detection', included: true },
      { text: 'Package detection', included: true },
      { text: 'Vehicle detection', included: true },
      { text: 'And more...', included: true }
    ]
  },
  {
    id: 'basic',
    planName: 'Basic',
    price: 2.99,
    period: 'mo',
    features: [
      { text: '14-day video history', included: true },
      { text: 'Person detection', included: true },
      { text: 'Package detection', included: true },
      { text: 'Vehicle detection', included: false },
      { text: 'And more...', included: false }
    ]
  },
  {
    id: 'none',
    planName: 'None',
    price: 0,
    period: 'mo',
    features: [
      { text: 'No subscription', included: true },
      { text: 'No video history', included: false },
      { text: 'No person detection', included: false },
      { text: 'No package detection', included: false },
      { text: 'No vehicle detection', included: false }
    ]
  }
]