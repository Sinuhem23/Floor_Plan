import React from 'react'
import Kitchen from '../Components/Kitchen';
import LivingRoom from '../Components/LivingRoom';
import Bedroom from '../Components/Bedroom';
import Bath from '../Components/Bath';
import '../CSS/floorplan.css'

// - A <Kitchen> component
// - A <LivingRoom> component
// - Three <Bedroom> components
// - Two <Bath> components
// Render the components in any order you wish to make the floor plan more interesting.

export default function FloorPlan() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum = {1}/>
      <Bedroom bedNum = {2}/>
      <Bedroom bedNum = {3}/>
      <Bath size={"Full"}/>
      <Bath size={"Half"}/>
    </div>
  )
}
