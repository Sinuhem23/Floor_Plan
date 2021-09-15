import React from 'react'
import Oven from '../Components/Oven';
import Sink from '../Components/Sink';

// Renders the text "Kitchen" and the following components:

// - A <Oven> component
// - A <Sink> component
export default function Kitchen() {
  return (
    <div>
      <h3>Kitchen</h3>
      <Oven />
      <Sink />
    </div>
  )
}
