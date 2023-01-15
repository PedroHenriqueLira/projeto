import React, { useContext } from "react";
import { CarrinhoPage } from "./style";
import produtos from "../../produtos.json"
import { ShopContext } from "../../context/shop-context";
export default function Carrinho(props){
    const {cart,addToCart,removeFromCart,getTotalCarrinho} = useContext(ShopContext)
    const valorTotal = getTotalCarrinho()
    console.log(valorTotal);
    return(
    <CarrinhoPage>
        <div className="containerProduto">
            {produtos.map((produto)=>{
                if(cart[produto.id] !== 0){
                    return(
                        <div className="produto">
                            <img src={produto.imagem}/>
                            <h1>{produto.id}</h1>
                            <h4>{produto.nome}</h4>
                            <h5>{produto.material}</h5>
                            <h6>{produto.valor}</h6>
                            <div>
                            <button onClick={()=>addToCart(produto.id)}>+</button>    
                            <input value={cart[produto.id]}></input>
                            <button onClick={()=>removeFromCart(produto.id)}>-</button>    
                            </div>
                        </div>
                    )
                }
            })}
        </div>
            <div className="total">
                <h1>TOTAL R$ {valorTotal.toFixed(2)}</h1>
            </div>
    </CarrinhoPage>
        )
}