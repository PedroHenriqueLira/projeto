import styled from "styled-components";

export const Card = styled.div`
background-color: #87CEFA;
width: 300px;
display: flex;
flex-direction: column;
color: white;
position: relative;
align-items: center;
border-radius: 10px;
border-color: white;
border: solid white 2px;
text-transform: uppercase;
button{border-radius:50px;
    width: 80px;
    background: linear-gradient(to left, #483D8B,#008080 ,#483D8B 90% );
};
:hover button{color :white;
    transition: 1s;
    transform : scale(1.2)}
    .StyleImg{
        width: 150px;
        height: 150px;
        :hover img{
            
            transition: 1s;
            transform: scale(1.2);
        }
    }
    `;
export const CardImg = styled.img`

height: 100%;
width:100%;




`
export const CardNome = styled.h4`
color: black;
text-align: justify;
font-size: 20px;

`
export const CardValor = styled.h6`
color: #00AEEF;
font-size: 20px;
`

export const CardMaterial = styled.h5`
color: green;
font-size: 15px;
`
export const CardId = styled.h6`
color: gray;
align-items: center;
display:flex;
flex-direction: column;

`
