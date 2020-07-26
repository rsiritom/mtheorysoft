import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonContainer } from './Button';




export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-muted text-white text-center">
        <ul className="social center">
          <li>
            <a className="twitter" href="https://twitter.com/chistesparatod6">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fa fa-twitter" />
                </span>
              </ButtonContainer>
            </a>
          </li>
          <li>
            <a className="instagram" href="https://instagram.com/loschistesparatodos">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fa fa-instagram" />
                </span>
              </ButtonContainer>
            </a>
          </li>
        </ul>
        <p className="footer-links">
          <Link to="/contactos" >
            Need help?
            </Link>
          <span> / </span>
          <Link to="/" >
            Surf our page
            </Link>
        </p>
      </footer>
    );
  }
}
