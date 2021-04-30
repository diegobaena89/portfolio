import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  background-color: #e3e3e3;
  padding:  0 0 80px;
  
  h2 {
    margin-bottom: 80px;
    color: #2ab7ca;
    font-weight: bold;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media(max-width: 1200px){
    .container {
      grid-template-columns: repeat(2, 1fr)
    }
  }

  @media(max-width: 769px){
    .container {
      grid-template-columns: repeat(1, 1fr)
    }
  }

`;
