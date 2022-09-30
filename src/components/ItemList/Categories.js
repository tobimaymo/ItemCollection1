import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div id="titulo-categoria" className='paddingcategory'>
        <Link to="/ItemCollection1/album/BTS" className='button-74'>BTS</Link>
        <Link to="/ItemCollection1/album/Taylor Swift" className='button-74'>Taylor Swift</Link>
        <Link to="/ItemCollection1/album/" className='button-74'>Todos</Link>
        <Link to="/ItemCollection1/album/Otros" className='button-74'>Otros</Link>
        
    </div>
  )
}

export default Categories