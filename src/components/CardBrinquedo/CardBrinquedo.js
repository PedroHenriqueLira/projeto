import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {
  Card,
  CardId,
  CardImg,
  CardMaterial,
  CardNome,
  CardValor,
} 
from "./style";
const CardBrinquedo = (props) => {
const {cart, addToCart, removeFromCart } = useContext(ShopContext)
  return (
    <Card>
      <div className="StyleImg">
        <CardImg src={props.imagem }/>
      </div>
      <CardId>
        {props.id}
        <CardNome>{props.nome}</CardNome>
        <CardMaterial>{props.material}</CardMaterial>
        <CardValor>R$ {props.valor}</CardValor>
      </CardId>
      <button onClick={()=> addToCart(props.id)} >Comprar</button>
    </Card>
  );
};
export default CardBrinquedo;
