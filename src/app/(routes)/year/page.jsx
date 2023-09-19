import Image from 'next/image'
import '@/components/Main.css'
import EdeldevYear from '-/camisas-edeldev/camisa-year.png'

export const metadata = {
  title: 'Ledbeey - Year',
  description: 'Marca de ropa, marca de ropa de moda, estilo de moda',
}

function Year() {
  return (
    <div className="main ps-0 ps-md-5 bg__year py-5">
      <div className="text-center flex__router text-white mostrar-year">
        <h2>YEAR (FASHION)</h2>
        <p>T-shirt YearDark</p>
        <p className='edition fw-light'>- New Edition</p>
        <p className='fw-bold'>$28.47USD <span className='text-black'>$49.74USD</span></p>
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
          <div className='flex__main-router mostrar-year-img'>
            <Image 
              id="playera"
              src={EdeldevYear}
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

export default Year