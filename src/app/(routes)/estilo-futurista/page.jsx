import Image from 'next/image'
import '@/components/Main.css'
import EdelDevFuturista from '-/camisas-edeldev/camisa-futurista.png'

export const metadata = {
  title: 'Ledbeey - Estilo Futurista',
  description: 'Marca de ropa futurista, Estilo futurista',
}


function EstiloFuturista() {
  return (
    <div className="main ps-0 ps-md-5 bg__futuristic py-5">
      <div className="text-center flex__router text-white mostrar-futuristic">
        <h2>ESTILO FUTURISTA</h2>
        <p>T-shirt FuturisticBlack</p>
        <p className='edition fw-light'>- New Edition</p>
        <p className='fw-bold'>$28.47USD <span>$49.74USD</span></p>
        <button 
          type='button' 
          className='py-2 px-4 button-shared-style' 
          style={{
            '--background-color': '#FFFFFF',
            '--background-image': 'linear-gradient(100deg,#ffffff4a 50%,#000000 50%)',
            '--color': '#FFFFFF',
            '--hover-color': '#000000',
            ':hover': {
              '--hover-color': '#000000'
            }
          }}
        >
              ¡COMPRAR!
        </button>
        </div>
          <div className='flex__main-router mostrar-futuristic-img'>
            <Image 
              id="playera"
              src={EdelDevFuturista}
              alt={`camisa-negro-ledbeey`}
              width={'600'} 
              height={'auto'} 
              className='img-fluid'
              priority={true}
            />
          </div>
    </div>
  )
}

export default EstiloFuturista