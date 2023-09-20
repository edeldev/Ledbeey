import Image from 'next/image'
import '@/components/Main.css'
import LedbeeyLujo from '-/camisas-ledbeey/camisa-ledbeey-lujo.png'

export const metadata = {
  title: 'Ledbeey - Lujo',
  description: 'Marca de ropa de lujo, Estilo de Lujo',
}

function Lujo() {
  return (
    <div className="main ps-0 ps-md-5 bg__lujo py-5">
      <div className="text-center flex__router text-black">
        <h2>LUJO</h2>
        <p>T-shirt LuxuryBlack</p>
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
          <div className='flex__main-router'>
            <Image 
              id="playera"
              src={LedbeeyLujo}
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

export default Lujo
