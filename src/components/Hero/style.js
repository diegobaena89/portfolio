import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  height: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px;

  img {
    width: 760px;
    display: flex;
    margin: 0 auto;
  }

  .greeting {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

  .greeting h5 {
    text-align: left;
    font-size: 1.5em;
    margin: 0
  }
  
  .greeting h1 {
    color: #2ab7ca;
    font-size: 3em;
    font-weight: 400;
  }

  .profile {
    padding: 50px 0;
  }

  @media(max-width: 974px){
    grid-template-columns: repeat(1, 1fr)
  }
`;
