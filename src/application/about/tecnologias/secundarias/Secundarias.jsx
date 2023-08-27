import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './Secundarias.scss';

const materialUI = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/materialUI_g0mohp.png';
const node = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181803/Portafolio/ACCL-NodeJS-300x300_ttxf8b.png';
const mongoDB = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181925/Portafolio/mongodb-icon_ygxdzr.svg';


export const Secundarias = () => {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
    AOS.refresh();
  }, []);


  return (
    <div className='secundariasContainer'>

      <div className="titleContainerSecundarias">

        <h3
          data-aos-offset="0"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos="fade-in"
        >
          I have knowledge in
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="500"

            className='subrayado'
          ></div>

        </h3>

      </div>

      <div className="imagesContainerSecundarias">

        <Tooltip
          data-aos-offset="0"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos={(sm) ? "fade-left" : "fade-right"}

          title="Node Js"
          arrow
        >
          <img className="raise" src={node} />
        </Tooltip>

        <Tooltip
          data-aos-offset="0"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos={(sm) ? "fade-right" : "fade-down"}

          title="Mongo DB"
          arrow
        >
          <img className="raise" src={mongoDB} />
        </Tooltip>

        <Tooltip
          data-aos-offset="0"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos={(sm) ? "fade-left" : "fade-left"}

          title="Material UI"
          arrow
        >
          <img className="raise" src={materialUI} />
        </Tooltip>

      </div>

    </div>
  )
}
