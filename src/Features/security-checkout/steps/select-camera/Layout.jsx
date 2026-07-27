import React from 'react'
import CameraCard from './component/CameraCard'
import useBundleBuilderStore from '../../store/useBundleBuilderStore'

function Layout() {
  const cameras = useBundleBuilderStore(state => state.cameras)

  return (
    <div>
      <div className="flex gap-4">
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