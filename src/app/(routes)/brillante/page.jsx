import Image from 'next/image'
import '@/components/Main.css'
import LedbeeyBrillante from '-/camisas-ledbeey/camisa-ledbeey-brillante.png'

export const metadata = {
  title: 'Ledbeey - Estilo Brillante',
  description: 'Marca de ropa Brillante, Estilo Brillante',
}

function Brillante() {
  return (
    <div className="main ps-0 ps-md-5 bg__brillante">
      <div className="text-center flex__router text-black mostrar-brillante">
        <h2>BRILLANTE</h2>
        <p>T-shirt BrillantDark</p>
        <p className='edition fw-light'>- New Edition</p>
        <p className='fw-bold'>$28.47USD <span>$49.74USD</span></p>
        <button 
          type='button' 
          className='py-2 px-4 button-shared-style' 
          style={{
            '--background-color': '#000000',
            '--background-image': 'linear-gradient(100deg,#00000048 50%,#FFFFFF 50%)',
            '--color': '#000000',
            '--hover-color': '#FFFFFF',
            ':hover': {
              '--hover-color': '#FFFFFF'
            }
          }}
        >
              ¡COMPRAR!
        </button>
        </div>
          <div className='flex__main-router mostrar-brillante-img'>
            <Image 
              id="playera"
              src={LedbeeyBrillante}
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

export default Brillante
