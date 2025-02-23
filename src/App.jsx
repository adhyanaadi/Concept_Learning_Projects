import { useState } from "react"
import ColorButton from "./components/ColorButton"
function App() {
  const [bgcolor, setBgcolor] = useState()
  const colorObj = [
    {"label":"Black",
      "color":"bg-gray-950"
    },
    {"label":"Red",
      "color":"bg-red-600"
    },
    {"label":"Green",
      "color":"bg-green-600"
    },
    {"label":"Blue",
      "color":"bg-blue-600"
    },
    {"label":"Yellow",
      "color":"bg-yellow-500"
    },
    {"label":"Pink",
      "color":"bg-pink-600"
    },
  ]

  return (
    <>
      <div className={`h-screen ${bgcolor}`}>
      <ColorButton onClick={()=>{setBgcolor(colorObj[0].color)}} label={colorObj[0].label} color={colorObj[0].color}/>
      <ColorButton onClick={()=>{setBgcolor(colorObj[1].color)}} label={colorObj[1].label} color={colorObj[1].color}/>
      <ColorButton onClick={()=>{setBgcolor(colorObj[2].color)}} label={colorObj[2].label} color={colorObj[2].color}/>
      <ColorButton onClick={()=>{setBgcolor(colorObj[3].color)}} label={colorObj[3].label} color={colorObj[3].color}/>
      <ColorButton onClick={()=>{setBgcolor(colorObj[4].color)}} label={colorObj[4].label} color={colorObj[4].color}/>
      <ColorButton onClick={()=>{setBgcolor(colorObj[5].color)}} label={colorObj[5].label} color={colorObj[5].color}/>

      </div>
    </>
  )
}

export default App
