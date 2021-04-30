import React from 'react';
import { Container } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const github = <FontAwesomeIcon icon={faGithub} size="1x" />;

const Boxes = (props) => {
  return (
    <Container>
      <div className="card">
        <div className="imgBx">
          <img src={props.imagem} alt="Work-example" />
        </div>
        <div className="contentBx">
          <div className="content">
            <h3>{props.projectName}</h3>
            <p>{props.projectDescrip}</p>
            <p>{props.technologies}</p>
            <a
              href={props.href}
              className="btn btn-outline-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              {github} Github
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Boxes;
