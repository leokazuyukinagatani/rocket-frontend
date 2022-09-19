import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;


export const Content = styled.div`  
  margin-top: 40px;
  overflow-y: auto;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > section {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
  h1,h2 {
    align-items: left;
    margin-bottom: 40px;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 24px;
  }
  .col-3 { 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 25px;
  }

  
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    transform: scale(1.5);
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    button {
      max-width: 424px;
      background-color: ${({theme}) => theme.COLORS.GREEN}
    }

    > button:first-child {
      color: ${({theme}) => theme.COLORS.WHITE};
      background-color: ${({theme}) => theme.COLORS.RED};
      margin-right: 25px;
      border: none;
    }
  }
`;


export const ButtonBack = styled(Link)`
  display:flex;
  align-items: center;
  color: ${({theme}) => theme.COLORS.PINK};
  gap: 8px;
  margin: 24px;
`;