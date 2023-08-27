import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

import './GithubAndDemoButtons.scss';


export const GithubAndDemoButtons = ({ github, demo }) => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
    AOS.refresh();
  }, []);


  return (
    <div className="github-demo">

      {
        (github)
        &&
        <a href={github} target="_blank">

          <button
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="1600"


            className="custom-btn btn-3"
          >
            <span><GitHubIcon /> Github</span>
          </button>

        </a>
      }

      {
        (demo)
        &&
        <a href={demo} target="_blank">

          <button
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="1800"


            className="custom-btn btn-3"
          >
            <span><TerminalIcon /> Demo</span>
          </button>

        </a>
      }

    </div>
  )
}
