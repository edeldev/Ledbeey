import CamisaLedbeey from "./CamisaLedbeey"
import { Suspense } from "react"

function HomeContent({selectedColor, handleColor}) {
    return (
        <>
            <div className="text-center text-white flex__contenido">
                <h2>LedbeeyDark</h2>
                <p >T-shirt Futuristic</p>
                <p className='edition'>- New Edition</p>
                <p className='fw-bold'>$28.47USD <span>$49.74USD</span></p>
                <div className="btns">
                    <div className={`btn-negro ${selectedColor === "negro" ? 'active' : ''}`} onClick={() => handleColor("negro")}></div>
                    <div className={`btn-blanco ${selectedColor === "blanco" ? 'active' : ''}`} onClick={() => handleColor("blanco")}></div>
                    <div className={`btn-amarillo ${selectedColor === "amarillo" ? 'active' : ''}`} onClick={() => handleColor("amarillo")}></div>
                </div>
            </div>
            <div className="flex__main d-flex flex-column">
                <Suspense fallback="Cargando...">
                    <CamisaLedbeey selectedColor={selectedColor} />
                    <button 
                    type='button' 
                    className='py-2 px-4 button-shared-style' 
                    style={{
                        '--background-color': '#ffffff30',
                        '--background-image': 'linear-gradient(100deg, #d7ff084a 50%, #dbf315 50%)',
                        '--color': '#000000',
                        '--hover-color': '#000000',
                        ':hover': {
                        '--hover-color': '#000000'
                        }
                    }}
                    >
                        ¡COMPRAR!
                    </button>
                </Suspense>
            </div>
        </>
    )
}

export default HomeContent