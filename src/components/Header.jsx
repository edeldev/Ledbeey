import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { Cart3 } from 'react-bootstrap-icons'
import { List } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'
import LogoLedbeey from '../../public/ledbeey-light.png'

function Header() {
  const [ menu, setMenu ] = useState(false);
  const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        // Agregar un evento de escucha para el evento de desplazamiento
        window.addEventListener('scroll', handleScroll);
    
        // Limpieza del evento de escucha cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollY])

      const open = () => {
        menu ? 
        setTimeout(() => {
          setMenu(false)
        }, 300)
        : setMenu(true)
      }

      useEffect(() => {
        const bodyOver = document.querySelector("body");
     
        menu ? bodyOver.classList.add("remover") : bodyOver.classList.remove("remover")
     
     
       }, [menu]);

  return (
    <>
        <header className={`${scrollY > 50 ? 'scroll-active' : ''} header py-4`}>
            <div className='logo'>
                <Link href="/">
                    <Image src={LogoLedbeey} alt="logo ledbeey" width="150" height="auto" />
                </Link>
            </div>
            <div className='men'>
                <p className='m-0'>Men</p>
            </div>
           <div className='flex__nav-menu'>
            { !menu ? (
              <List className="fs-5 icono menu__icon" onClick={open} /> 
              ) : (
                <X className="fs-3 icono menu__icon" onClick={() => setMenu(false)} />
              )
            }
           </div>
            <nav className='flex__nav'>
                <Link href="/carrito">
                    <Cart3 className="fs-5 icono" />
                </Link>
            </nav>
        </header>

        {/* Menu */}
      { menu && <Menu setMenu={setMenu} /> }
    </>
  )
}

export default Header
