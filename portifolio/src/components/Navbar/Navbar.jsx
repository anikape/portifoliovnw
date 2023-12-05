import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import logoHeader from '../../assets/logoHeader.svg';
import linkedin from '../../assets/linkedin.svg';
import git from '../../assets/git.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <BootstrapNavbar
      expanded={expanded}
      expand="lg"
      className="navbar navbar-dark bg-dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logoHeader} alt="Github" width="47" height="47" />
        </Link>
        <BootstrapNavbar.Toggle
          aria-controls="navbarNav"
          onClick={handleToggle}
        />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto" onClick={handleClose}>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/projects">
              Projetos
            </Link>
            <Link className="nav-link" to="/contato">
              Contato
            </Link>
            <NavDropdown title="Redes Sociais" id="basic-nav-dropdown">
              <NavDropdown.Item href="/linkedin">
                <img src={linkedin} alt="Linkedin" width="20" height="20" />
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="/github">
                <img src={git} alt="Github" width="20" height="20" />
                Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;