import styled from "styled-components";
export const Container = styled.div`

  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,.7);
  margin: 20px;
 
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .content {
    width: 100%;
    padding: 0 25px 25px;
  }

  h1 {
    font-size: 75px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 25px;
    text-align: center;
  }

  .text {
    font-size: 25px;
    letter-spacing: 1px;
    line-height: 1.7;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 35px;
  }


  .info {
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.7;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-right: 10px;
  }


`;