import React from 'react'
import CameraCard from './component/CameraCard'
import useBundleBuilderStore from '../../store/useBundleBuilderStore'

function Layout() {
  const cameras = useBundleBuilderStore(state => state.cameras)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
        {cameras.map((camera) => (
          <CameraCard
            key={camera.id}
            camera={camera}
          />
        ))}
      </div>
    </div>
  )
}

export default Layout