import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { CardImage } from './cardComponents/image/CardImage';
import { Tecnologias } from "./cardComponents/tecnologias/Tecnologias";
import { GithubAndDemoButtons } from "./cardComponents/github-demo/GithubAndDemoButtons";
import { Description } from "./cardComponents/description/Description";

import './CardProyect.scss';


export const CardProyect = ({ img, title, description, tecnologias, github, demo }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div
            data-aos="fade-right"
            data-aos-offset={(!sm && !md) ? "300" : "0"}
            data-aos-duration="1000"
            data-aos-delay="500"

            className="containerCardProyecto"
        >

            <div className="firstContainer">
                {
                    (sm || md)
                    &&
                    <div className='title'>

                        <h3
                            data-aos="fade-in"
                            data-aos-easing="ease-in-back"
                            data-aos-duration="500"
                            data-aos-delay="500"
                            data-aos-offset="300"
                        >
                            {title}
                            <div
                                className='subrayado'
                                data-aos="fade-right"
                                data-aos-easing="ease-in-back"
                                data-aos-duration="500"
                                data-aos-delay="600"
                                data-aos-offset="300"
                            ></div>
                        </h3>

                    </div>
                }

                <CardImage img={img} />

            </div>

            <div className="secondContainer">

                {
                    (!sm && !md)
                    &&
                    <div className='title'>
                        <h3
                            data-aos="fade-in"
                            data-aos-easing="ease-in-back"
                            data-aos-duration="500"
                            data-aos-delay="500"
                            data-aos-offset="300"
                        >
                            {title}
                            <div
                                data-aos="fade-right"
                                data-aos-easing="ease-in-back"
                                data-aos-duration="500"
                                data-aos-delay="600"
                                data-aos-offset="300"

                                className='subrayado'
                            ></div>
                        </h3>
                    </div>
                }

                <Description description={description} />

                <Tecnologias tecnologias={tecnologias} />

                <GithubAndDemoButtons github={github} demo={demo} />

            </div>

        </div>
    )
}
