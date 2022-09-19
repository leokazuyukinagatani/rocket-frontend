import styled from "styled-components"
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
  
`;

export const Form = styled.form`
  
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  
  .btn-all {
    max-width: 50px;
    position: fixed;
    top: 0;
    left: 0;
    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.PINK};
    margin: 20px;
  }
  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 42px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  .btn-register {
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
