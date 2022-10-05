import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './Views/ItemDetail/ItemDetailContainer'
import FooterBar from "./components/Footer/FooterBar";
import Autor from "./components/Autor/Autor";
import Todos from "./Views/Todos/Todos";
import Shop from "./Views/Shop/Shop";
import Cart from "./Views/Cart/Cart";
import { CartProvider } from "./Context/CartContext";

function App (){

    return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/ItemCollection1/detail/:id'} element={<ItemDetailContainer />} />
            <Route path={'/ItemCollection1/shop'} element={<Shop/>}/>
            <Route path={'/ItemCollection1/cart'} element={<Cart/>}/>
            <Route path={'/ItemCollection1/album/:autor'} element={<Autor/>}/>
            <Route path={'/ItemCollection1/album'} element={<Todos/>}/>
            <Route path={'/ItemCollection1/'} element={<Todos/>}/>
          </Routes>
        </div>
        <FooterBar />
      </Router>
    </CartProvider>
    );
}

export default App;
