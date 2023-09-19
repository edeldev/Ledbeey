"use client"
import { Sora } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import NavVertical from '@/components/NavVertical';
import ContentHome from '@/components/ContentHome';
import '../components/ContainerLedbeey.css' // Estilos

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={sora.className}>

        <div className='container__ledbeey'>
          <Header />
          <NavVertical />
          {children}
        </div>
        <ContentHome />
      </body>
    </html>
  )
}
