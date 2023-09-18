"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram  } from 'react-bootstrap-icons'
import { Facebook  } from 'react-bootstrap-icons'
import { Tiktok  } from 'react-bootstrap-icons'

function NavVertical() {

    const pathname = usePathname()

  return (
    <>
        <div className="menu__vertical">
            <div className='letters'>
                <Link className={`${pathname === '/lujo' ? 'activado' : ''}`} translate='no' href='/lujo'>L</Link>
                <Link className={`${pathname === '/elegancia' ? 'activado' : ''}`} translate='no' href='/elegancia'>E</Link>
                <Link className={`${pathname === '/diseno-moderno' ? 'activado' : ''}`} translate='no' href='/diseno-moderno'>D</Link>
                <Link className={`${pathname === '/brillante' ? 'activado' : ''}`} translate='no' href='/brillante'>B</Link>
                <Link className={`${pathname === '/estilo-minimalista' ? 'activado' : ''}`} translate='no' href='/estilo-minimalista'>E</Link>
                <Link className={`${pathname === '/estilo-futurista' ? 'activado' : ''}`} translate='no' href='/estilo-futurista'>E</Link>
                <Link className={`${pathname === '/year' ? 'activado' : ''}`} translate='no' href='/year'>Y</Link>
            </div>

            <div className="social__media">
                <a href="https://facebook.com" target="_blank">
                    <Facebook className='fs-4'/>
                </a>
                <a href="https://instagram.com/ledbeey" target="_blank">
                    <Instagram className='fs-4'/>
                </a>
                <a href="https://tiktok.com" target="_blank">
                    <Tiktok className='fs-4'/>
                </a>
            </div>
        </div>
        <div className="linea"></div>
    </>
  )
}

export default NavVertical
