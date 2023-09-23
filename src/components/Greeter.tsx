import React from 'react'
import Person from '../modules/GreeterProps'
import GreeterProps from '../modules/GreeterProps'
export default function Greeter({person} :GreeterProps): JSX.Element {
  return (
    <div>Hello world from {person}</div>
    
  )
}
