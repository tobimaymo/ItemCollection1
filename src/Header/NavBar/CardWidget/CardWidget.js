import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

const CardWidget = () => {
  return (
    <div className='CounterSection'>
        <Link to={'/CartContext/cart'}>
          <button id="boton-carrito">
            <span id="contadorCarrito">0</span>
            <img src={process.env.PUBLIC_URL + "/img/carritowhite.png"} alt='carrito' className="bi me-2" width="40" height="40"></img>
          </button>        
        </Link>
      </div>
  )
}

export default CardWidget