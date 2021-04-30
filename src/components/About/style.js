import styled from 'styled-components';

export const Container = styled.div`
  
background-color: #171717;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;

  color: #fff;

img{
  width: 400px;
  display: flex;
  margin: 0 auto;
}

.profile:nth-child(1) {
  margin-top: 50px;
}

@media(max-width: 974px){
  img {
    width: 350px
  }
  .container {
    display: flex;
    flex-direction: column;
  }
}
`;
