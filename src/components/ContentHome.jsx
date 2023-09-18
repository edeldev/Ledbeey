import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Productos from './Productos';
import Accesorios from '../../public/accesorios.webp'
import Tazas from '../../public/tazas.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function ContentHome() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 4000 }}>
        <SwiperSlide>
          <Image src={Accesorios} alt='accesorios' height={'auto'} placeholder="blur" />
          <div className='caja__content text-white'>
            <p className='fw-light m-0'>Coleccion de Accesorios</p>
            <h3 className='py-2 fw-bold'>-Ledbeey Accesorios-</h3>
            <a 
              href='#' 
              className='px-3 py-2 text-decoration-none'
              style={{
                '--background-color': '#FFFFFF',
                '--color': '#000000'
                }}
              >50% DESCUENTO 🔥</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Tazas} alt='tazas' height={'auto'} placeholder="blur" />
          <div className='caja__content text-black'>
            <p className='fw-light m-0'>Coleccion de Tazas</p>
            <h3 className='py-2 fw-bold'>-Ledbeey Tazas-</h3>
            <a 
              href='#' 
              className='px-3 py-2 text-decoration-none' 
              style={{
                '--background-color': '#000000',
                '--color': '#FFFFFF'
                }}
                >50% DESCUENTO 🔥</a>
          </div>
        </SwiperSlide>
      </Swiper>

      <Productos />
    </>
  )
}

export default ContentHome