import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import camerasData from '../data/cameras'
import sensorsData from '../data/sensors'
import accessoriesData from '../data/extraProtection.jsx'
import { plans } from '../data/plans'

const useBundleBuilderStore = create(
  persist(
    (set, get) => ({
      // State
      cameras: JSON.parse(JSON.stringify(camerasData)),
      sensors: JSON.parse(JSON.stringify(sensorsData)),
      accessories: accessoriesData.map(item => ({ ...item, quantity: 0 })),
      selectedPlan: null,

      // Actions
      setCameras: (cameras) => set({ cameras }),

      setSensors: (sensors) => set({ sensors }),

      setAccessories: (accessories) => set({ accessories }),

      setSelectedPlan: (plan) => set({ selectedPlan: plan }),

      // Camera actions
      updateCameraColorQuantity: (cameraId, colorId, quantity) => {
        const cameras = get().cameras.map(camera => {
          if (camera.id === cameraId) {
            return {
              ...camera,
              colors: camera.colors.map(color => {
                if (color.id === colorId) {
                  return { ...color, quantity: Math.max(0, quantity) }
                }
                return color
              })
            }
          }
          return camera
        })
        set({ cameras })
      },

      selectCameraColor: (cameraId, colorId) => {
        const cameras = get().cameras.map(camera => {
          if (camera.id === cameraId) {
            return { ...camera, selectedColor: colorId }
          }
          return camera
        })
        set({ cameras })
      },

      incrementCameraQuantity: (cameraId, colorId) => {
        const camera = get().cameras.find(c => c.id === cameraId)
        if (camera) {
          const color = camera.colors.find(c => c.id === colorId)
          if (color) {
            get().updateCameraColorQuantity(cameraId, colorId, color.quantity + 1)
          }
        }
      },

      decrementCameraQuantity: (cameraId, colorId) => {
        const camera = get().cameras.find(c => c.id === cameraId)
        if (camera) {
          const color = camera.colors.find(c => c.id === colorId)
          if (color && color.quantity > 0) {
            get().updateCameraColorQuantity(cameraId, colorId, color.quantity - 1)
          }
        }
      },

      // Sensor actions
      updateSensorQuantity: (sensorId, quantity) => {
        const sensors = get().sensors.map(sensor => {
          if (sensor.id === sensorId) {
            return { ...sensor, quantity: Math.max(0, quantity) }
          }
          return sensor
        })
        set({ sensors })
      },

      incrementSensorQuantity: (sensorId) => {
        const sensor = get().sensors.find(s => s.id === sensorId)
        if (sensor) {
          get().updateSensorQuantity(sensorId, sensor.quantity + 1)
        }
      },

      decrementSensorQuantity: (sensorId) => {
        const sensor = get().sensors.find(s => s.id === sensorId)
        if (sensor && sensor.quantity > 0) {
          get().updateSensorQuantity(sensorId, sensor.quantity - 1)
        }
      },

      // Accessory actions
      updateAccessoryQuantity: (accessoryId, quantity) => {
        const accessories = get().accessories.map(accessory => {
          if (accessory.id === accessoryId) {
            return { ...accessory, quantity: Math.max(0, quantity) }
          }
          return accessory
        })
        set({ accessories })
      },

      incrementAccessoryQuantity: (accessoryId) => {
        const accessory = get().accessories.find(a => a.id === accessoryId)
        if (accessory) {
          get().updateAccessoryQuantity(accessoryId, accessory.quantity + 1)
        }
      },

      decrementAccessoryQuantity: (accessoryId) => {
        const accessory = get().accessories.find(a => a.id === accessoryId)
        if (accessory && accessory.quantity > 0) {
          get().updateAccessoryQuantity(accessoryId, accessory.quantity - 1)
        }
      },

      // Derived data
      getSelectedCameras: () => {
        const cameras = get().cameras
        const selected = []
        cameras.forEach(camera => {
          camera.colors.forEach(color => {
            if (color.quantity > 0) {
              selected.push({
                ...camera,
                color: color
              })
            }
          })
        })
        return selected
      },

      getSelectedSensors: () => {
        const sensors = get().sensors.filter(sensor => sensor.quantity > 0)
        return sensors
      },

      getSelectedAccessories: () => {
        const accessories = get().accessories.filter(accessory => accessory.quantity > 0)
        return accessories
      },

      getCameraCount: () => {
        return get().cameras.reduce((total, camera) => {
          const cameraTotal = camera.colors.reduce((sum, color) => sum + color.quantity, 0)
          return total + cameraTotal
        }, 0)
      },

      getUniqueCameraCount: () => {
        return get().cameras.filter(camera => 
          camera.colors.some(color => color.quantity > 0)
        ).length
      },

      getSensorCount: () => {
        return get().sensors.reduce((total, sensor) => total + sensor.quantity, 0)
      },

      getAccessoryCount: () => {
        return get().accessories.reduce((total, accessory) => total + accessory.quantity, 0)
      },

      getSubtotal: () => {
        let subtotal = 0
        let originalTotal = 0

        // Cameras
        get().cameras.forEach(camera => {
          camera.colors.forEach(color => {
            if (color.quantity > 0) {
              subtotal += camera.price * color.quantity
              originalTotal += camera.originalPrice * color.quantity
            }
          })
        })

        // Sensors
        get().sensors.forEach(sensor => {
          if (sensor.quantity > 0) {
            subtotal += sensor.price * sensor.quantity
          }
        })

        // Accessories
        get().accessories.forEach(accessory => {
          if (accessory.quantity > 0) {
            subtotal += accessory.price * accessory.quantity
            if (accessory.originalPrice) {
              originalTotal += accessory.originalPrice * accessory.quantity
            } else {
              originalTotal += accessory.price * accessory.quantity
            }
          }
        })

        // Plan
        if (get().selectedPlan) {
          const plan = get().selectedPlan
          const discount = plan.discount || 0
          const regularPrice = discount > 0 ? plan.price / (1 - discount / 100) : plan.price
          originalTotal += regularPrice
          subtotal += plan.price
        }

        return { subtotal, originalTotal, savings: originalTotal - subtotal }
      },

      getPlanSubtotal: () => {
        if (!get().selectedPlan) return 0
        const plan = get().selectedPlan
        return plan.price
      },

      getPlanOriginalPrice: () => {
        if (!get().selectedPlan) return 0
        const plan = get().selectedPlan
        const discount = plan.discount || 0
        return discount > 0 ? plan.price / (1 - discount / 100) : plan.price
      },

      // Reset
      reset: () => {
        set({
          cameras: JSON.parse(JSON.stringify(camerasData)),
          sensors: JSON.parse(JSON.stringify(sensorsData)),
          accessories: [],
          selectedPlan: null
        })
      },

      // Clear saved data
      clearSaved: () => {
        set({
          cameras: JSON.parse(JSON.stringify(camerasData)),
          sensors: JSON.parse(JSON.stringify(sensorsData)),
          accessories: [],
          selectedPlan: null
        })
        if (typeof window !== 'undefined') {
          localStorage.removeItem('bundle-builder-storage')
        }
      }
    }),
    {
      name: 'bundle-builder-storage',
      version: 2,
      partialize: (state) => ({
        cameras: state.cameras,
        sensors: state.sensors,
        // Strip React elements (icon) before persisting — they can't be JSON-serialized
        accessories: state.accessories.map(({ icon, ...rest }) => rest),
        selectedPlan: state.selectedPlan
      }),
      // Reconstruct accessories with their original React elements (icons) from the data file
      merge: (persisted, current) => ({
        ...current,
        ...persisted,
        accessories: persisted.accessories
          ? persisted.accessories.map(acc => {
              const original = accessoriesData.find(d => d.id === acc.id)
              return original ? { ...original, ...acc } : acc
            })
          : current.accessories
      })
    }
  )
)

export default useBundleBuilderStore