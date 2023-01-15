import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: white;
  background-color: rgba(105, 105, 105, 0.150);
  .carrinho img{
width: 50px;
height: 50px;
margin-right: 70px;
}
.homePage{
  width: 50px;
  height: 50px;
}
  
`;
export const LogoPage = styled.div`
  display: flex;
margin-left: 30px;
 img{
     width: 100px;
     height: 100px;
     margin-right: 30px;
     border-radius: 50%;
    }
    .texto{
        display: flex;
        flex-direction: column;
        align-items: center;
    h1 {
    color: aqua;
    font-family: "Alex Brush", cursive;
    font-size: 50px;
  }
  h5 {
    color: orange;
    font-family: "Alex Brush", cursive;
    font-size: 30px;
  }}

`;

export const Texto = styled.div`
    align-items: center;
    flex-direction: column;
    margin-left: 150px;

`;
export const Pesquisa = styled.div`
  display: flex;
  margin-right: 675px;
  margin-top: -30px;

  #divBusca {
    display: flex;
    background-color: #e0eeee;
    border: solid 2px #5f9ea0;
    border-radius: 10px;
    height: 32px;
  }

  #txtBusca {
    float: left;
    background-color: transparent;
    padding-left: 10px;
    font-size: 18px;
    border: none;
    height: 30px;
    width: 180px;
    color: black;
  }

  #btnBusca {
    border: none;
    float: left;
    border-radius: 0 7px 7px 0;
    width: 60px;
    font-weight: bold;
    background: aqua;
  }
`;
