import React, { useEffect } from 'react';
import { Container } from './style';
import Aos from 'aos';
import 'aos/dist/aos.css';
import contatoImg from '../../img/contato-img.png';

const Contato = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Container>
        <div className="container" id="contact">
          <h2 data-aos="fade-up" className="text-center pt-5">
            Contato
          </h2>
          <div data-aos="fade-up" className="contact">
            <div className="form">
              <p className="text-center mb-4">
                Para entrar em contato comigo, basta preencher o formulário
                abaixo.
              </p>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Nome</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="email@exemplo.com.br"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Assunto</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-info mt-2 btn-block "
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="sprite2">
              <img
                src={contatoImg}
                alt="img contact"
                className="img-fluid"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contato;
