import React from 'react'

import "./Welcome.css"

export const Welcome = () => {
  return (
    <div className='body__welcome-bg flex__center'>
      <div className='body__welcome-central-element flex__center'>
        <h1>Welcome!</h1>
        <h5>Please feel free to use the Navbar at the top to check out various types of data imported from given API!</h5>
      </div>
    </div>
  )
}
