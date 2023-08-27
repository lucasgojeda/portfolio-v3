import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardProyect } from '../components/cardProyect/CardProyect';
import { Footer } from '../components/footer/Footer';

import { data } from './data.js';

import './Proyectos.scss';


export const Proyectos = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);


    return (
        <div
            id='proyectos'
            className="proyectosContainer"
        >

            <div
                className="titleContainerProyectos"
            >

                <h1
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos="fade-in"

                    className="title"
                >
                    My projects
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right"

                        className='subrayado'
                    ></div>
                </h1>

            </div>


            {
                data.map((e, i) =>
                    <CardProyect
                        key={i}
                        title={e.title}
                        img={e.img}
                        description={e.description}
                        tecnologias={e.tecnologias}
                        github={e.github}
                        demo={e.demo}
                    />)
            }

            <Footer />

        </div>
    )
}
