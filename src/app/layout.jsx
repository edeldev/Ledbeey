"use client"
import { Sora } from 'next/font/google'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import NavVertical from '@/components/NavVertical';
import ContentHome from '@/components/ContentHome';
import Rutas from '@/components/Rutas';
import '../components/ContainerLedbeey.css' // Estilos

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const pathname = usePathname();

  const routes = {
    '/': <ContentHome />,
    '/lujo': <Rutas />,
    '/elegancia': <Rutas />,
    '/diseno-moderno': <Rutas />,
    '/brillante': <Rutas />,
    '/estilo-minimalista': <Rutas />,
    '/estilo-futurista': <Rutas />,
    '/year': <Rutas />
  };
  

  return (
    <html lang="en">
      <body className={sora.className}>

        <div className='container__ledbeey'>
          <Header />
          <NavVertical />
          {children}
        </div>
        { routes[pathname]}
        <footer className='footer py-4 text-center'>
          <Link href='/' className='text-decoration-none text-white'>Ledbeey &copy; {new Date().getFullYear()}</Link>
        </footer>
      </body>
    </html>
  )
}
