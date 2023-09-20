import Image from 'next/image'
import '@/components/Main.css'
import LedbeeyMinimalista from '-/camisas-ledbeey/camisa-ledbeey-minimalista.png'

export const metadata = {
  title: 'Ledbeey - Estilo Minimalista',
  description: 'Marca de ropa minimalista, Estilo minimalista',
}


function EstiloMinimalista() {
  return (
    <div className="main ps-0 ps-md-5 bg__minimalist py-5">
      <div className="text-center flex__router text-black mostrar-minimalist">
        <h2>ESTILO MINIMALISTA</h2>
        <p>T-shirt MinimalistBlack</p>
        <p className='edition fw-light'>- New Edition</p>
        <p className='fw-bold'>$28.47USD <span>$49.74USD</span></p>
        <button 
          type='button' 
          className='py-2 px-4 button-shared-style' 
          style={{
            '--background-color': '#FFFFFF',
            '--background-image': 'linear-gradient(100deg,#ffffff48 50%,#e61414 50%)',
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
          <div className='flex__main-router mostrar-minimalist-img'>
            <Image 
              id="playera"
              src={LedbeeyMinimalista}
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

export default EstiloMinimalista
