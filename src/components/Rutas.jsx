
import Image from "next/image"
import { usePathname } from 'next/navigation';
import './Productos.css'
import { collectionLedbeey, collectionEdelDev, collectionNft } from "@/data/productos"

export function renderProductSection(collection) {
    return (
      <div className="row justify-content-center align-items-center">
        {collection.map((item, index) => (
          <div className="col-6 col-md-4 flex1__col" key={index}>
            <div className="galeria__card">
              <div className="galeria p-3 text-center">
                <a href="https://etsy.com" target="_blank">
                  <Image src={item.imagen} alt={`imagen-${item.titulo}`} className='img-fluid' placeholder="blur" />
                </a>
                <h4 className='pt-3 m-0' title={item.titulo}>{item.titulo}</h4>
                <p className='fw-bold my-3 parrafos__font' dangerouslySetInnerHTML={{ __html: item.parrafo }}></p>
                <p className="envio px-4 py-1 rounded">+ Envio Gratis</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default function Rutas() {

    const pathname = usePathname();

    const data = {
        titles: {
        '/lujo': 'Colección Lujo',
        '/elegancia': 'Colección Elegante ',
        '/diseno-moderno': 'Colección Moderna',
        '/brillante': 'Colección Brillante',
        '/estilo-minimalista': 'Colección Minimalista',
        '/estilo-futurista': 'Colección Futurista',
        '/year': 'Colección Year',
        },
        colleciones: {
            '/lujo': collectionLedbeey,
            '/elegancia': collectionEdelDev,
            '/diseno-moderno': collectionNft,
            '/brillante': collectionLedbeey,
            '/estilo-minimalista': collectionEdelDev,
            '/estilo-futurista': collectionNft,
            '/year': collectionLedbeey
        }
      };

      const title = data.titles[pathname];
      const currentCollection = data.colleciones[pathname];

      const classBg = {
        '/lujo': 'lujo__bg',
        '/elegancia': 'elegant__bg',
        '/diseno-moderno': 'moderno__bg',
        '/brillante': 'brillante__bg',
        '/estilo-minimalista': 'minimalista__bg',
        '/estilo-futurista': 'futurista__bg',
        '/year': 'year__bg'
      }

    return (
        <section className={`${classBg[pathname]}`}>
          <div className="container-xl py-4">
            <h2 className='py-4 ps-3 m-0'>{title}</h2>
            {renderProductSection(currentCollection)}
          </div>
        </section>
    );
  }
