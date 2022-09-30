import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './Views/ItemDetail/ItemDetailContainer'
import FooterBar from "./components/Footer/FooterBar";
import Autor from "./components/Autor/Autor";
import Todos from "./Views/Todos/Todos";
import Shop from "./Views/Shop/Shop";

function App (){

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/ItemCollection1/detail/:id'} element={<ItemDetailContainer />} />
            <Route path={'/ItemCollection1/cart'} />
            <Route path={'/ItemCollection1/shop'} element={<Shop/>}/>
            <Route path={'/ItemCollection1/album/:autor'} element={<Autor/>}/>
            <Route path={'/ItemCollection1/album'} element={<Todos/>}/>
            <Route path={'/ItemCollection1/'} element={<Todos/>}/>
          </Routes>
        </div>
        <FooterBar />
      </Router>
    );
}

export default App;
