import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area:header;
  padding: 0 25px;
  height: 115px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 64px;
  .container-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  >:nth-child(2) {
    margin-bottom: 0;
    max-width: 630px;
  }
  @media (max-width: 945px){
    gap: 10px;
    .container-logo h2 {
      display: none;
    }
  }
`;

export const Profile = styled(Link)`
 
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  @media (max-width: 700px){
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
  }

`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
  
    line-height: 24px;
    width: 50px;
    
    button {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      background: none;
      border: none;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
   
  }
  @media (max-width: 945px){
      >div{
        width: 30px;
      }
      strong {
        display: none;
      }
  }
`;