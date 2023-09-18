"use client"
import Image from "next/image";
import LedbeeyNegro from '-/camisas-ledbeey/camisa-dark-ledbeey.png'
import LedbeeyBlanco from '-/camisas-ledbeey/camisa-light-ledbeey.png'
import LedbeeyAmarillo from '-/camisas-ledbeey/camisa-naranja-ledbeey.png'

function CamisaLedbeey({ selectedColor }) {

    const isDesktop = () => {
        return window.innerWidth > 768; 
      };
      
      const transformation = (e) => {
        if (isDesktop()) {
          const x = e.clientX;
          const y = e.clientY;
          makeTransformation(x, y);
        }
      };
      
      const makeTransformation = (x, y) => {
        if (isDesktop()) {
          const elem = document.getElementById("playera");
          const rect = elem.getBoundingClientRect();
          const x1 = x - (rect.x + rect.width / 2);
          const y1 = y - (rect.y + rect.height / 2);
          elem.style.transform = `translateZ(10px) rotateX(${x1 / 5}deg) rotateY(${y1 / 8}deg)`;
        }
      };
      
      const stablePlayera = () => {
        if (isDesktop()) {
          const elem = document.getElementById("playera");
          elem.style.transform = `translateZ(0px) rotateX(0deg) rotateY(0deg)`;
        }
      };

      const imagePaths = {
        negro: LedbeeyNegro,
        blanco: LedbeeyBlanco,
        amarillo: LedbeeyAmarillo,
      };
      

  return (
    <Image 
        id="playera"
        src={imagePaths[selectedColor]}
        alt={`camisa-${selectedColor}-ledbeey`}
        width={'550'} 
        height={'auto'} 
        className='img-fluid' 
        priority={true}
        onMouseMove={transformation}
        onMouseOut={stablePlayera}
    />
  )
}

export default CamisaLedbeey
