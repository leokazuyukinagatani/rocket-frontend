import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;
  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom:  16px;
    margin-bottom: 24px;
  }
  .header {
    button {
      margin: 0;
      max-width: 225px;
      font-size: 16px;
      line-height: 21px;
      height: 48px;
      font-weight: 400;
      padding: 0 18px;
     }
  }
  .header > h2 {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 42px;
    font-weight: 400;
  }

  li {
    list-style: none;
  }
  
`;

export const Content = styled.div`

  grid-area: content;
  max-height: 350px;
  overflow-y: auto;
  padding-right: 16px;
  
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



  
`;