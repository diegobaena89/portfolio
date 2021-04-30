import React, { useEffect } from 'react';
import Icon from './Icons';
import { Container } from './style';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faReact,
  faNodeJs,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const html = <FontAwesomeIcon icon={faHtml5} size="4x" />;
const css = <FontAwesomeIcon icon={faCss3Alt} size="4x" />;
const javascript = <FontAwesomeIcon icon={faJsSquare} size="4x" />;
const boots = <FontAwesomeIcon icon={faBootstrap} size="4x" />;
const react = <FontAwesomeIcon icon={faReact} size="4x" />;
const node = <FontAwesomeIcon icon={faNodeJs} size="4x" />;
const sqlserver = <FontAwesomeIcon icon={faDatabase} size="4x" />;
const git = <FontAwesomeIcon icon={faGitAlt} size="4x" />;

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" id="skills">
      <h2 data-aos="fade-up" className="text-center pt-5 font-weight-bold">
        Skills
      </h2>
      <Container data-aos="fade-up">
        <Icon icon={html} lang="Html5" />
        <Icon icon={css} lang="Css3" />
        <Icon icon={javascript} lang="Javascript ES6" />
        <Icon icon={boots} lang="Bootstrap" />
        <Icon icon={react} lang="React" />
        <Icon icon={node} lang="Node" />
        <Icon icon={sqlserver} lang="SQL Server" />
        <Icon icon={git} lang="Git" />
      </Container>
    </div>
  );
};

export default Skills;
