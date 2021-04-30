import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #242424;
  margin: 0;
  padding: 0 0 40px;
  color: white;

  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    margin: 50px 0;
  }

  .sprite2 img {
    width: 500px;
    display: flex;
    margin: 0 auto;
  }

  @media(max-width: 994px){
    .contact {
      grid-template-columns: repeat(1, 1fr)
    }
  }
`;
