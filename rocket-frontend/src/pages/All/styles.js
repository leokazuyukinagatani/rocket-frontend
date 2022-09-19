import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .btn-all {
    max-width: 250px;
    position: fixed;
    top: 0;
    right: 0;
    border: none;
    background: ${({theme}) => theme.COLORS.GRAY_400};
    color: ${({theme}) => theme.COLORS.PINK};
    margin: 20px;
  }
  .pagination-bar {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    border: 2px solid #fff;
  }
  
`;