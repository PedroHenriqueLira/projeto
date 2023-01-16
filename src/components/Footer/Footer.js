import React from "react";
import { FooterPage } from "./style";
export default function Footer() {
  return (
    <>
    
      <FooterPage>
        <div className="footer">
        <div className="social">

        <p><a href="https://github.com/PedroHenriqueLira" target="_blank"><img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            /></a></p> 
        <p><a href="https://www.linkedin.com/in/pedro-oliveira-0275b8241/" target="_blank"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png"
             className="imgLnk"/></a></p> 
            </div>

<div className="parceiros">

            <a href="https://sable-jewel.surge.sh/" target="_blank">
        <img src="https://i.imgur.com/9bNPWdB.png"/>
            </a>
          
            <a href="https://few-snake.surge.sh/"  target="_blank">
        <img src="https://i.imgur.com/17A7j3O.png" />
            </a>

            <a href="https://www.google.com.br/" target="_blank">
        <img src="https://i.ibb.co/DDGJg8Z/baixados.png"/>
            </a>

            <a href="https://e-commer-react-aflap.surge.sh/" target="_blank">
        <img src="https://i.imgur.com/lXFsdst.png"/>
            </a>
        
</div>
       
            </div>
        
      </FooterPage>
    </>
  );
}
