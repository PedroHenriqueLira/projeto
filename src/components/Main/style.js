import styled from "styled-components";

export const MainPage = styled.main`
  display: flex;
  height: 180vh;
  

  input {
    margin-left: 30px;
    width: 120px;
    margin-top: 10px;
    border-radius: 10px;
  }
  .select {
    background-color: rgba(105, 105, 105, 0.15);
    width: 150px;
    margin-right: 20px;
    
    select {
      width: 120px;
      margin-left: 30px;
      margin-top: 20px;
      border-radius: 10px;
    }
  }
  .styleProdutos {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 80px;
  }
`;
