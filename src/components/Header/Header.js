import React from "react";
import { Link } from "react-router-dom";
import Carrinho from "../Carrinho/Carrinho";
import { HeaderPage, LogoPage, Pesquisa } from "./style";

export function Header(props) {
  const onChangeBuscarBrinquedo = (event) => {
    props.setBuscarBrinquedo(event.target.value);
    console.log(props.buscarBrinquedo);
  };
  
  return (
    <>
      <HeaderPage>
        <LogoPage>
          <img src="https://i.gifer.com/D4a.gif" />
          <div className="texto">
            <h1>Space Toy Store</h1>
            <h5>Uma viagem diferente.</h5>
          </div>
        </LogoPage>
        <Pesquisa>
          <div id="divBusca">
            <input
              type="text"
              onChange={(event) => onChangeBuscarBrinquedo(event)}
              id="txtBusca"
              placeholder="Buscar..."
            />
          </div>
        </Pesquisa>
     
            <div className="carrinho">
      <Link to="/">
      <img src="https://cdn-icons-png.flaticon.com/512/4539/4539494.png"/>
      </Link>
         
         <Link to="/carrinho" >
         <img src="https://cdn-icons-png.flaticon.com/512/1942/1942770.png"/>
         </Link>
            </div>
  
      </HeaderPage>
    </>
  );
}
