import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import project from '../assets/project.png'
import Card from '../components/Cards/Cards'
import cardsList from '../util/cardsList'
import robot from '../assets/robot.png'
import virtual from  '../assets/virtual.png'
import './project.css'
import Footer from '../components/Footer/Footer'


const projects = () => {
  return (
    <div id='container'>

      <Navbar />

      <section className="projectsContainer">
      <section className="projects">
        <h1 className="title">
          <span className="colchetes">&lt;</span>
          Projetos Pessoais
          <span className="colchetes">/&gt;</span>
        </h1>
        <p>
          Como parte da minha transição de carreira, dediquei tempo para trabalhar em projetos pessoais que não apenas demonstram minhas habilidades, mas também refletem minha paixão por criar experiências web excepcionais. Alguns dos projetos que tenho em andamento incluem:
        </p>
      </section>

      <section className="image">
        <figure>
          <img src={project} alt="Imagem de um projeto" width={608}
          height={456} />
        </figure>
      </section>
    </section>

    <div className='projectContent'>
      {cardsList.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          imagem={card.imagem}
          path={card.path}
          pathGit={card.pathGit}
          description={card.description}
        />
      ))}
    </div>

    <div className='robots'>
      <img src={virtual} alt='realidade virtual' width={456} height={456} />
      <img src={robot} alt='robô' width={232} height={368} />
    </div>
    
      <Footer />
    
    
    
    </div>
  )
}

export default projects