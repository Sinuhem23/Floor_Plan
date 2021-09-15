import React from 'react'

// Accepts a bedNum prop and renders the text "Bedroom [bedNum]" (substituting the value of the bedNum prop)
export default function Bedroom(props) {
  return (
    <div>
      <h3>Bedroom {props.bedNum}</h3>
    </div>
  )
}
