import { useState, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './CardImage.scss';


export const CardImage = ({ img }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    const [counterImage, setCounterImage] = useState(1);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));

    const incrementCounter = () => {

        if (counterImage === (img.length)) {

            setCounterImage(1);
        } else {

            setCounterImage(counterImage + 1);
        }
    }

    const decrementCounter = () => {

        if (counterImage === 1) {

            setCounterImage(img.length);
        } else {

            setCounterImage(counterImage - 1);
        }
    }

    return (
        <div className='imageContainer'>

            {
                img.map((e, i) =>
                    <img
                        key={i}
                        src={e}
                        alt=""

                        data-aos={(!sm && !md) ? "fade-up" : "fade-in"}
                        data-aos-offset={(!sm && !md) ? "300" : "0"}
                        data-aos-duration="500"
                        data-aos-delay="700"

                        className='image'

                        style={{
                            display: ((i + 1) !== counterImage) && 'none'
                        }}
                    />)
            }

            <div
                data-aos={(!sm && !md) ? "fade-up" : "fade-in"}
                data-aos-offset={(!sm && !md) ? "300" : "0"}
                data-aos-duration="500"
                data-aos-delay="700"

                className='arrowsContainer'
            >

                <div className='counter'>
                    <h3>{counterImage}/{img.length}</h3>
                </div>

                <IconButton
                    id='leftArrowIcon'
                    color="primary"
                    component="span"
                    onClick={decrementCounter}
                >
                    <ArrowLeftIcon />
                </IconButton>

                <IconButton
                    id='rightArrowIcon'
                    color="primary"
                    component="span"
                    onClick={incrementCounter}
                >
                    <ArrowRightIcon />
                </IconButton>

            </div>

        </div>
    )
}
