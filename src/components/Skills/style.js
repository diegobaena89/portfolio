import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: auto;
  padding: 60px 0 100px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;



  @media(max-width: 974px){
    grid-template-columns: repeat(2, 1fr)
  }

  @media(max-width: 600px){
    grid-template-columns: repeat(1, 1fr)
  }
`;
