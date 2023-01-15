import React from "react";
import produtos from "../../produtos.json";
import CardBrinquedo from "../CardBrinquedo/CardBrinquedo";
import Carrinho from "../Carrinho/Carrinho";
import { MainPage } from "./style";
export default function Main(props) {
  const onChangeBuscarValorMinimo = (event) => {
    props.setBuscarValorMinimo(event.target.value);
    console.log(props.buscarValorMinimo);
  };

  const onChangeBuscarValorMaximo = (event) => {
    props.setBuscarValorMaximo(event.target.value);
    console.log(props.buscarValorMaximo);
  };
  const onChangeOrdem = (event) =>{
    props.setOrdem(event.target.value);
    console.log(props.ordem)
  };
  return (
    
      <MainPage>
        <div className="select">
          <select onChange={(event) => onChangeOrdem(event)}>
            <option value="Ordenar">Ordenar</option>
            <option value="Crescente">A - Z</option>
            <option value="Decrescente">Z - A</option>
          </select>
          <div className="ValorMin">
            <input
              placeholder="Valor Mínimo"
              type="number"
              onChange={(event) => onChangeBuscarValorMinimo(event)}
            ></input>
            <input
              placeholder="Valor Máximo"
              type="number"
              onChange={(event) => onChangeBuscarValorMaximo(event)}
            ></input>
          </div>
        </div>
        <div>
          <div className="styleProdutos">
            {produtos
              .filter((item) => {
                return item.nome
                .toUpperCase()
                .includes(props.buscarBrinquedo.toUpperCase());
              })
              .filter((item)=>{
                if (props.buscarValorMinimo !== '' && props.buscarValorMaximo !== 0) {
                  if (item.valor >= props.buscarValorMinimo && item.valor <= props.buscarValorMaximo) {
                    return item.valor;
                  }
                }else if (props.buscarValorMinimo === '' && props.buscarValorMaximo ==='') {
                  props.setBuscarValorMinimo(0)
                  props.setBuscarValorMaximo(99999)                
                }
              } 
              )
                .sort((item , nItem) =>{
                  if (props.ordem === "Ordenar"){
                    return                 item.id.localeCompare(nItem.id)
                  }
                  else if (props.ordem ==="Crescente"){
                    return                item.nome.localeCompare(nItem.nome)
              }
              else if (props.ordem === "Decrescente"){
                return                nItem.nome.localeCompare(item.nome)
              }})
              
              .map((item) => {
                return (
                  <CardBrinquedo
                  id={item.id}
                  key={item.id}
                  nome={item.nome}
                  imagem={item.imagem}
                  valor={item.valor}
                  material={item.material}
                  item={item.item}
                  />
                  )
                })}
          </div>
        </div>
      </MainPage>
    
  );
}

