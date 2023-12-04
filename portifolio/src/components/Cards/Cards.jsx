import React from 'react';
import { Link } from 'react-router-dom';
import menu from "../../assets/menu-colors.svg"
import './card.css'

const Card = ({ name, imagem, path, pathGit, description }) => {
  return (
    <section className="cards">
      <img className="balls" src={menu} alt="" />
      <img src={imagem} style={{ width: '375px', height: '171px' }} alt="" />

      <h1 className="titleProjects">
        Projeto <span className="highlight">{'{'}</span>
        <span className="blue">{name}</span>
        <span className="highlight">{'}'}</span>
      </h1>

      <p className="paragraph">{description}</p>

      <p className="paragraph" id="stack">
        Tech stack: HTML 5, CSS, React.Js, Vite, Figma, Scrum
      </p>

      <div className="linksProjects">
        <Link className='link' to={path} target="_blank" alt="">
          Live Preview
        </Link>
        <Link className='link' to={pathGit} target="_blank">
          <img src="./images/git.svg" target="_blank" alt="" />
          View Code
        </Link>
      </div>
    </section>
  );
};

export default Card;
