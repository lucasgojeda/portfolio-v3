import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './Tecnologias.scss';


export const Tecnologias = ({ tecnologias }) => {

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
        <div className="tecnologias">

            {
                (tecnologias?.react) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="900"
                >React</button>
            }

            {
                (tecnologias?.javascript) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1000"
                >Javascript</button>
            }

            {
                (tecnologias?.css) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1100"
                >Css</button>
            }

            {
                (tecnologias?.sass) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1100"
                >Sass</button>
            }

            {
                (tecnologias?.html) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1200"
                >Html</button>
            }

            {
                (tecnologias?.node) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1300"
                >Node</button>
            }

            {
                (tecnologias?.express) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1400"
                >Express</button>
            }

            {
                (tecnologias?.mongoDb) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset={(!sm && !md) ? "150" : "0"}
                    data-aos-duration="500"
                    data-aos-delay="1500"
                >MongoDb</button>
            }


        </div>
    )
}
