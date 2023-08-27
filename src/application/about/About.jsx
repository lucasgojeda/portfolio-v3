import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { Principales } from "./tecnologias/principales/Principales";
import { Secundarias } from "./tecnologias/secundarias/Secundarias";

import './About.scss';


export const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);


    return (
        <div className="aboutContainer">

            <div className="titleContainerPrimarias">

                <h3
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos="fade-in"
                >
                    I'm focus on
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right"

                        className='subrayado'
                    ></div>
                </h3>

            </div>

            <Principales />

            <Secundarias />

            <div data-aos="fade-right" className="ResumenContainer2">

                <ul>

                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="700"
                        data-aos="fade-right"
                    >
                        <span><DoubleArrowIcon />I have been learning and practicing web development in a self-taught way for almost <span className="textColorized"> two years</span>.</span>
                    </li>

                    <li
                        data-aos-offset="0"

                        data-aos-duration="500"
                        data-aos-delay="600"
                        data-aos="fade-right"
                    >
                        <span><DoubleArrowIcon />I am interested in continuing to do courses focused on improving as a <span className="textColorized">fullstack developer</span>.</span>
                    </li>

                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right"
                    >
                        <span><DoubleArrowIcon />I have conversational <span className="textColorized">English</span>.</span>
                    </li>

                </ul>

            </div>

        </div>
    )
}
