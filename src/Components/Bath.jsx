import React from 'react'
import '../CSS/bath.css'


// Accepts a size prop and renders the text "[size] Bath", i.e., "Half Bath", "Full Bath"
export default function Bath(props) {
  return (
    <div className='bath'>
      <h3>{props.size} Bath</h3>
    </div>
  )
}
