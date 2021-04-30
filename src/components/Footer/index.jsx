import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-light pt-4">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a
                className="mx-1"
                href="http://github.com/diegobaena89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="mx-1"
                href="http://instagram.com/dihhbaena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className=" mx-1"
                href="http://linkedin.com/in/diegobaena/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright
          <p>Diego Baena</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
