import React from 'react'
import HomeStructure from '../../components/Layout'
import CreatePin from '../../components/CreatePin'

function createPin() {
  return (
    <div>
      <HomeStructure title="Create Pin" subtitle="Create pin to enable transfer">
      <CreatePin/>
      </HomeStructure>
    </div>
  )
}

export default createPin
