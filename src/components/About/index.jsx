import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import amico from '../../img/amico2.png';

import { Container } from './style';

const linkedin = <FontAwesomeIcon icon={faLinkedin} size="1x" />;
const cv = <FontAwesomeIcon icon={faFileAlt} size="1x" />;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container id="about">
      <div className="container">
        <h2 data-aos="fade-up" className="text-center mb-5 font-weight-bold">
          Sobre mim
        </h2>
        <div data-aos="fade-up" className="row">
          <div className="col-12 col-md-6">
            <div data-aos="fade-up" className="sprite">
              <img src={amico} alt="Amico" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div data-aos="fade-up" className="profile">
              <p>
                Olá, meu nome é Diego Baena, tenho 31 anos e moro no Estado de
                São Paulo. Sou graduado em letras com especialização em Grego
                moderno, mas em 2020 resolvi migrar para a carreira de
                Desenvolvedor Front-end, onde comecei uma nova graduação - de
                Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Sou bastante curioso e autodidata, o que facilita minha
                aprendizagem de novos conteúdos constantemente. Estou em busca
                de novos desafios profissionais que me permitam crescer na minha
                carreira.
              </p>
              <p>Para saber mais sobre mim, visite:</p>
              <a
                href="http://linkedin.com/in/diegobaena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-info">{linkedin} Linkedin</button>
              </a>

              <a
                href="https://drive.google.com/file/d/18iIRAZo_kw4X0bsv9sC-GrovtkVA1wKa/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-info ml-3">{cv} Currículo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
