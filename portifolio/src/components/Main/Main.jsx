import React from 'react'
import pink from '../../assets/pink.png'
import colors from '../../assets/colors.svg'
import cloud from '../../assets/cloud.png'
import menu from  '../../assets/menu-colors.svg'
import './main.css'


const Main = () => {
  return (
    <section className="aboutMe">

      <div className="menuColors">
      <img className='colors' src={colors} alt="Bolinhas coloridas" width={152} height={27}/>
      <img className='colors2' src={menu} alt="Bolinhas coloridas" width={152} height={27}/>
      <hr/>

      <div className="aboutMeContent">
       <h1>
        Eu sou<br/>
        Desenvolvedora <span className="highlight">{'{'}</span>
        <span className="blue">Front-End</span><span className="highlight">{'}'}</span>.
      </h1>


          <p>Uma entusiasta de tecnologia que está em transição de carreira, ansiosa para conquistar meu primeiro desafio como desenvolvedora front-end. Embora minha jornada profissional tenha começado em uma direção diferente, meu amor pela tecnologia e minha paixão por criar experiências digitais únicas me levaram a seguir meu coração e buscar uma nova carreira emocionante.</p>
        </div>       
      </div>

      <section className="images">

      <img className="image1" src={pink} alt="símbolo </>" width={343} height={212} />
      <img className="image2" src={cloud} alt="Nuvem de dados" width={406} height={296} />

    </section>

    </section>

    
  )
};

export default Main