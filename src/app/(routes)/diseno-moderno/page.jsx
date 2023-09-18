import Image from 'next/image'
import '@/components/Main.css'
import EdelDevModerno from '-/camisas-edeldev/camisa-edeldev-moderno.png'

export const metadata = {
  title: 'Ledbeey - Diseño Moderno',
  description: 'Marca de ropa Moderna, Estilo Moderno, diseños modernos',
}

function DisenoModerno() {
  return (
    <div className="main ps-0 ps-md-5 bg__moderno">
      <div className="text-center flex__router text-black mostrar-modern">
        <h2>DISEÑO MODERNO</h2>
        <p>T-shirt ModernDark</p>
        <p className='edition fw-light'>- New Edition</p>
        <p className='fw-bold'>$28.47USD <span className='text-white'>$49.74USD</span></p>
        <button 
          type='button' 
          className='py-2 px-4 button-shared-style' 
          style={{
            '--background-color': '#000000',
            '--background-image': 'linear-gradient(100deg,#0000004a 50%,#ffffff 50%)',
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
          <div className='flex__main-router mostrar-modern-img'>
            <Image 
              id="playera"
              src={EdelDevModerno}
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

export default DisenoModerno
