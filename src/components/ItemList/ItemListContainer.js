import './ItemList.css'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from "firebase/firestore"
import { db } from '../../firebaseConfig';
import { async } from '@firebase/util';


function ItemListContainer() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const getAlbums = async () => {
            const q = query(collection(db, "album"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, ' => ', doc.data());
                docs.push({...doc.data(), id: doc.id })
            });
            setItems(docs);
        };
        getAlbums();
    }, [])
    
 return (
    <>
        <div div className="album py-5 bg-dark" id="divMain">
            <div div className="container">
                <div div id="contenedor-productos">
			            <ItemList productos={items} />
                </div>
            </div>
        </div>
    </>
 );
}

export default ItemListContainer