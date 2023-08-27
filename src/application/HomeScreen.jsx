import { useRef } from "react";

import { About } from './about/About'
import { Inicio } from './inicio/Inicio'
import { Proyectos } from './proyectos/Proyectos'

import { ParticlesBackground } from "./components/particlesBackground/ParticlesBackground";

import './HomeScreen.scss';


export const HomeScreen = () => {

  const aboutRef = useRef(null);

  const scrollToElement = () => {

    aboutRef.current.scrollIntoView();
  };

  return (
    <div className='homeScreenContainer'>

      <Inicio scrollToElement={scrollToElement} />

      <div ref={aboutRef}>
        <About />
      </div>

      <Proyectos />

      <ParticlesBackground />

    </div>
  )
}
