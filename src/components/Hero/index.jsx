import React, { useEffect } from 'react';
import { Container } from './style';
import photo from '../../img/hero2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <div className="greeting" data-aos="fade-up">
        <div className="profile">
          <h5>Hey! Eu sou o</h5>
          <h1>Diego Baena</h1>
          <h5>Desenvolvedor Web Fullstack Jr.</h5>
        </div>
      </div>
      <div className="photo" data-aos="fade-up">
        <img src={photo} alt="Hero" className="img-fluid" />
      </div>
    </Container>
  );
};

export default Hero;
