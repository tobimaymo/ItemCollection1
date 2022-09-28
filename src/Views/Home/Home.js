import React from 'react'
import ItemListContainer from '../../components/ItemList/ItemListContainer';

const Home = ({ItemData}) => {
  return (
    <>
    <main className='bg-dark'>
        <ItemListContainer ItemData={ItemData}/>
    </main>
    </>
  )
}

export default Home