"use client"
import { useState } from "react";
import HomeContent from './HomeContent'
import './Main.css'

function Home() {

  const [selectedColor, setSelectedColor] = useState('negro');

    const handleColor = (color) => {
        if (color !== selectedColor) { // Verificar si el color es diferente al actual
        setSelectedColor(color);
        }
    }

  return (
    <div className="main py-5">
      <HomeContent 
        selectedColor={selectedColor}
        handleColor={handleColor} 
      />
    </div>
  )
}

export default Home
