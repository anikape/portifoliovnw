import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import me from '../../assets/me.png';
import lovely from '../../assets/lovely.png';
import lovely2 from '../../assets/lovely2.png';
import me2 from '../../assets/me2.png';
import './home.css';
import Main from '../Main/Main';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';

const Home = () => {
  const [imageSrc, setImageSrc] = useState(me);
  const [lovelyImageSrc, setLovelyImageSrc] = useState(lovely);
  const [typedName, setTypedName] = useState('');
  const name = 'Ana Santos';

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const type = () => {
      setTypedName((prev) => {
        if (currentIndex <= name.length) {
          currentIndex++;
          return name.substring(0, currentIndex);
        } else {
          currentIndex = 0;
          return '';
        }
      });

      timeout = setTimeout(type, 250);
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const handleMouseOverMe = () => {
    setImageSrc(me2);
  };

  const handleMouseOutMe = () => {
    setImageSrc(me);
  };

  const handleMouseOverLovely = () => {
    setLovelyImageSrc(lovely2);
  };

  const handleMouseOutLovely = () => {
    setLovelyImageSrc(lovely);
  };

  return (
    <div className='homecontainer'>
      <Navbar />
      <section className='profile'>
        <div className='profileImage'>
          <img
            className='me'
            src={imageSrc}
            alt='Avatar Ana Santos'
            width='410'
            height='394'
            onMouseOver={handleMouseOverMe}
            onMouseOut={handleMouseOutMe}
          />
        </div>

        <div className='profileContent'>
          <p>
            Olá! Sou <span>{typedName}</span>.
          </p>
          <p>
            Esse é meu{' '}
            <span>
              <img
                className='lovely'
                src={lovelyImageSrc}
                width={94}
                height={94}
                alt='Imagem de um coração amarelo'
                onMouseOver={handleMouseOverLovely}
                onMouseOut={handleMouseOutLovely}
              />
            </span>{' '}
            portfólio
          </p>
        </div>
      </section>

      <Main />
      <Skills />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
