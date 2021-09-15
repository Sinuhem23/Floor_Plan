import React from 'react'
import Oven from '../Components/Oven';
import Sink from '../Components/Sink';
import '../CSS/kitchen.css'

// Renders the text "Kitchen" and the following components:

// - A <Oven> component
// - A <Sink> component
export default function Kitchen() {
  return (
    <div className='kitchen'>
      <div className='ovenSink'>
      <Oven />
      <Sink />
      </div>
      <h3>Kitchen</h3>

    </div>
  )
}
