import styled from 'styled-components';

export const Container = styled.div`

  .card {
    /* position: relative; */
    width: 350px;
    height: 250px;
    margin: 5px auto;
    overflow: hidden;
  }

  .card .imgBx, 
  .card .contentBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover
  }

  .card .contentBx::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #272727;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    transition-delay: 0.5s;
  }

  .card:hover .contentBx::before {
    transform: scaleX(1);
    transition: transform 0.5s ease-in-out;
    transform-origin: left;
    transition-delay: 0s;
  }

  .card .contentBx {
    display: flex;
    justify-content: center;
    align-items: center;
  }

.card .contentBx .content {
  position: relative;
  padding: 30px;
  z-index: 1;
  transition: 0.5s;
  transform: translateX(-300px);
  transition-delay: 0s;
}

.card:hover .contentBx .content {
  transform: translateX(0px);
  transition-delay: 0.5s;
}

.card .contentBx .content h3 {
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
}

.card .contentBx .content p {
  font-size: 1em;
  line-height: 1.4em;
  font-weight: 300;
  color: #fff;
}

`;
