import React, { useState } from "react";
import Carrinho from "./components/Carrinho/Carrinho";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import './App.css'
function App() {
  const [buscarBrinquedo, setBuscarBrinquedo] = useState("");
  const [buscarValorMinimo, setBuscarValorMinimo] = useState(0);
  const [buscarValorMaximo, setBuscarValorMaximo] = useState(99999);
  const [ordem, setOrdem] = useState("");

  return (
    <ShopContextProvider>
      <BrowserRouter>
      <div className="App">
          <Header
            buscarBrinquedo={buscarBrinquedo}
            setBuscarBrinquedo={setBuscarBrinquedo}
          />
          <div className="containerMain">
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={
                    <Main
                      buscarBrinquedo={buscarBrinquedo}
                      ordem={ordem}
                      setOrdem={setOrdem}
                      buscarValorMinimo={buscarValorMinimo}
                      setBuscarValorMinimo={setBuscarValorMinimo}
                      buscarValorMaximo={buscarValorMaximo}
                      setBuscarValorMaximo={setBuscarValorMaximo}
                    ></Main>
                  }
                />
                <Route path="carrinho" element={<Carrinho />} />
              </Route>
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
