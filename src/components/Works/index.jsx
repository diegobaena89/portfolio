import React, { useEffect } from 'react';
import Boxes from './Boxes/Boxes';
import { Container } from './style';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Niteo from '../../img/niteo.png';
import Automatize from '../../img/automatize.png';
import JSProject from '../../img/js.png';
import FAQ from '../../img/faq.png';
import MoveIt from '../../img/moveit.png';
import Github from '../../img/github.jpg';

const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="works">
      <h2 data-aos="fade-up" className="text-center pt-5">
        Works
      </h2>
      <div data-aos="fade-up" className="container">
        <Boxes
          imagem={Niteo}
          projectName="Niteo"
          projectDescrip="Mockup de site criado para a empresa Niteo durante bootcamp na Soulcode Academy"
          technologies="Html, Css, Javascript, jQuery"
          href="https://github.com/diegobaena89/soulCodeAcademy-projects/tree/main/Niteo"
        />
        <Boxes
          imagem={Automatize}
          projectName="Automatize Store"
          projectDescrip="Site criado para a empresa de automação residencial Automatize Store"
          technologies="Html, Css, Javascript, Bootstrap, jQuery"
          href="https://github.com/diegobaena89/soulCodeAcademy-projects/tree/main/Automatize"
        />
        <Boxes
          imagem={JSProject}
          projectName="Javascript Page"
          projectDescrip="Projeto criado para que o usuário pode acessar Calculadoras, Conversor de moeda e cadastro"
          technologies="Html, Css, Javascript"
          href="https://github.com/diegobaena89/soulCodeAcademy-projects/tree/main/JS"
        />
        <Boxes
          imagem={FAQ}
          projectName="FAQ Platform"
          projectDescrip="Plataforma de perguntas e respostas no estilo do Yahoo"
          technologies="NodeJS, Express, MySQL, Css, Bootstrap"
          href="https://github.com/diegobaena89/FAQ-platform"
        />
        <Boxes
          imagem={MoveIt}
          projectName="Move.it"
          projectDescrip="Projeto de aplicação pomodoro realizada na NLW#04 da Rocketseat"
          technologies="React, Styled Components, Next, Typescript"
          href="https://github.com/diegobaena89/nlw-react-moveit-app"
        />
        <Boxes
          imagem={Github}
          projectName="Github Repos"
          projectDescrip="Buscador de repositórios do github com consulta de API."
          technologies="Ract, Styled Components, API's"
          href="https://github.com/diegobaena89/github-repos"
        />
      </div>
    </Container>
  );
};

export default Works;
