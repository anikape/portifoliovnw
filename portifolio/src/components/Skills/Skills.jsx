import React from 'react'
import  './skills.css'
import iconskills from '../../util/iconskills'



const Skills = () => {


  return (

    <section className="skills">

      <h1>
        <span className="colchetes">
          {'<'} </span>
            Habilidades Técnicas
            <span class="colchetes"> {'/>'} </span>
      </h1>
    <section className="skillsContent">
        <ul>
          <li>HTML, CSS, JavaScript:
            <span>Minha base sólida em HTML, CSS e JavaScript me permite criar não apenas websites funcionais, mas também interfaces atraentes e interativas. </span>
          </li>
          <li>React.js e Next.js:
            <span>Estou profundamente empenhada em aprimorar minhas habilidades em React.js e Next.js, pois acredito que essas tecnologias representam o futuro do desenvolvimento web.</span>
          </li>
          <li>Git e GitHub:
            <span>Uso o Git e o GitHub como ferramentas essenciais para controlar versões <br/> de código, colaborar com outros desenvolvedores e contribuir para projetos de código aberto.</span>
          </li>
          <li>Sass:
            <span>Minha experiência com Sass me permite escrever estilos de forma mais eficiente e manutenível, mantendo a consistência no design.</span>
          </li>
          <li>Figma:
            <span>O Figma é uma parte crucial do meu fluxo de trabalho, permitindo-me transformar designs em interfaces funcionais e colaborar de forma eficaz com designers. </span>
          </li>
          <li>Metodologia Ágil:
            <span>Adoto a metodologia ágil para garantir que os projetos sejam entregues com eficiência, adaptando-me às necessidades em constante mudança.</span>
          </li>
        </ul>

      </section>

     
      <section className='dataIcons'>
        {iconskills.map((skill, index) => (
          <div key={index} className="icons">
            <img src={skill.image} alt={skill.name} />
            {/* <span>{skill.name}</span> */}
          </div>
        ))}
      </section>
    
    </section>
  )
}

export default Skills