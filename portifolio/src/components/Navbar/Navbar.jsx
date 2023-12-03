import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../assets/logoHeader.svg'
import linkedin from '../../assets/linkedin.svg'
import git from '../../assets/git.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
      <img src={logoHeader} alt="Github" width="47" height="47" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projetos">
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contato">
              Contato
            </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/contato">
                <img src={linkedin} alt="Linkedin" width="20" height="20" />
                Linkedin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                <img src={git} alt="Github" width="20" height="20" />
               Github
              </Link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
