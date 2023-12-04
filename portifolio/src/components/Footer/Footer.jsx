import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <section id='footer'>
      <section className="contact">
        <a href="https://wa.me/5581988693599" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="fa-2x" />
        </a>
        <a id="email" href="mailto:ana.br@hotmail.com">ana.br@hotmail.com</a>
      </section>

      <div id="footerContainer" className="footerNav">
        <nav className="footerNavigation">
          <ul id='footerList'>
            <li><a className="navLink" href="/">Home</a></li>
            <li><a className="navLink" href="/projects">Projects</a></li>
            <li><a className="navLink" href="/contact">Contact</a></li>
            <li>
              <a className="navLink" href="https://www.linkedin.com/in/ana-saantos/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> Linkedin
              </a>
            </li>
            <li>
              <a className="navLink" href="https://github.com/anikape" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Github
              </a>
            </li>
          </ul>
        </nav>

        <div id="copyright">
        <h3>Ana Santos &copy;2023 - All rights reserved. </h3>
        </div>
      </div>

      

    </section>
  );
};

export default Footer;