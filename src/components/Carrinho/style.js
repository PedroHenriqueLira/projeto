import styled from "styled-components";

export const CarrinhoPage = styled.section`
flex:1;
width: 100%;
text-transform: uppercase;
display: flex;
flex-direction: column;
padding: 50px;
height: 110vh;
.produto {
  border-radius: 10px;
  border: solid white 2px;
  border-color: white;
  background-color: #87CEFA;
  width: 300px;
  height: 300px;
  align-items: center;
  padding-top: 40px;
  text-align: center;
  margin-bottom: 60px;
  img {
    width: 150px;
    height: 150px;
    
  }
  img:hover {
    transition: 1s;
    transform: scale(1.2);
  }
  button{
    width: 40px;
      border-radius: 50px;
      background-color: aqua;
    }
    input{
      width: 40px;
      text-align: center;
    } 
    h4{
      color:black;
      
      font-size:20px;
      
    }
    h6{
      color: #00AEEF;
      font-size: large;
      
    }
    h5{
      color:green;
      font-size: 15px;
      
    }
    h1{
      color: gray;
      
      font-size: 15px;
    }
    ;
  }
  .containerProduto{
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    justify-content: space-evenly;
    
  }
  .total{
    text-align: end;
    margin-right: 50px ;
    margin-top: 20px;
    color: white;

  }
  `;
