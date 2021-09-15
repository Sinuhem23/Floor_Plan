import React from 'react'
import '../CSS/bedroom.css'

// Accepts a bedNum prop and renders the text "Bedroom [bedNum]" (substituting the value of the bedNum prop)
export default function Bedroom(props) {
  return (
    <div className='bedroom'>
      <h3>Bedroom {props.bedNum}</h3>
    </div>
  )
}
