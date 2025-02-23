import React from 'react'

// const ColorButton = ({label, color, onClick}) => {
//   return (
//     <>
//     <button onClick={onClick} className={`${color} text-white p-4 px-6 font-bold text-3xl`}>{label}</button>
//     </>
//   )
// }
const ColorButton = (props) => {
  return (
    <>
    <button onClick={props.onClick} className={`${props.color} text-white p-4 px-6 font-bold text-3xl`}>{props.label}</button>
    </>
  )
}
// I prefer 1st method more! Becausse I can exactly see which properties have been passed.
export default ColorButton
