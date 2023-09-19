import { X } from "react-bootstrap-icons"
import { Cart3 } from "react-bootstrap-icons"

function Carrito({setCarrito}) {
  return (
    <section className="carrito p-4">
      <div className="d-flex justify-content-between align-items-center header__cart">
        <p className="m-0">Mi carrito</p>
        <div className="border__x">
            <X className="fs-3 text-dark close__cart" onClick={() => setCarrito(false)} />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center content__cart">
        <Cart3 className="cart__icono mb-4" />
        <p>Tu carro esta vacío</p>
      </div>
    </section>
  )
}

export default Carrito
