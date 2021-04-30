import React from 'react';
import { Container } from './style';
const bracket1 = '{';
const bracket2 = '}';

const Navbar = () => {
  return (
    <Container>
      <div className="container p-0 ">
        <nav class="navbar navbar-expand-lg navbar-light bg-none d-flex py-4">
          <a href="#top" className="navbar-brand">
            {bracket1} Diego<strong>Baena</strong> {bracket2}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link text-center" href="#about">
                  Sobre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center" href="#works">
                  Projetos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default Navbar;
