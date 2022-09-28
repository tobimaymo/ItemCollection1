import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Header/NavBar/NavBar";
import Home from './Views/Home/Home'
import ItemDetailContainer from './Views/ItemDetail/ItemDetailContainer'
import FooterBar from "./components/Footer/FooterBar";

function App (){

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/CapsuleCorpMusic/'} element={<Home/>} />
            <Route path={'/CapsuleCorpMusic/detail/:id'} element={<ItemDetailContainer />} />
            <Route path={'/CapsuleCorpMusic/cart'} />
          </Routes>
        </div>
        <FooterBar />
      </Router>
    );
}

export default App;
