import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  align-items: center;
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }

  button {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.PINK};
    max-width: 150px;
  }
  
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
`;


