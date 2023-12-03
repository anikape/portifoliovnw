import React from 'react'
import Navbar from '../Navbar/Navbar'
import me from '../../assets/me.png'
import lovely from '../../assets/lovely.png'
import './home.css'

const Home = () => {
  return (
    <div className='homecontainer' >
      <Navbar />
      <section className='profile'>

      <div className='profileImage'>
        <img className='me' src={me} alt="Avatar Ana Santos" width="410" height="394" />
      </div>

      <div className='profileContent'>
        <p>
          Olá! Sou <span> Ana Santos</span>.
        </p>
        <p>Esse é meu <span><img className='lovely'  src={lovely} width={94}
height={94} alt='Imagem de um coração amarelo' /></span> portifólio</p>

      </div>
     

      </section>
    </div>
  )
}

export default Home