import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './Description.scss';


export const Description = ({ description }) => {

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
        <div className="descripcion">

            <ul>
                {
                    description.items.map((e, i) =>
                        <li
                            key={i}
                            data-aos="fade-left"
                            data-aos-offset={(!sm && !md) ? "300" : "0"}
                            data-aos-duration="500"
                            data-aos-delay="800"
                        >
                            <span>
                                <span
                                    data-aos="fade-zoom-in"
                                    data-aos-offset={(!sm && !md) ? "300" : "0"}
                                    data-aos-duration="500"
                                    data-aos-delay="1900"
                                >
                                    <KeyboardArrowRightIcon />
                                </span>
                                {e}
                            </span>
                        </li>
                    )
                }
            </ul>

        </div>
    )
}
