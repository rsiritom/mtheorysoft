import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { ButtonContainer } from './Button';


export default class NavBar extends Component {
  render() {
    return (

      <Navbar expand="lg" className="navbar navbar-expand-xl bg-primary navbar-dark  justify-content-between">

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav ">
          <div className="navbar navbar-expand-xl bg-primary navbar-dark  justify-content-between">
            <ul className="navbar-nav ">
              <li className="nav-item ml-5">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link" href="/productlist">Apps</a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link" href="/nosotros">About us</a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link" href="/galeriaFotos">Galery</a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link" href="/contactos">Contact</a>
              </li>
            </ul>
          </div>

        </Navbar.Collapse>
        <div id="navbar-button-group">

          <Link to="/productlist" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fa fa-cart-plus" />
              </span>
              Apps
            </ButtonContainer>
          </Link>
        </div>
      </Navbar>

    );
  }
}
