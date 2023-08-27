import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { Typography } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Type } from "./Type";
import { ArrowDown } from "../components/arrowDown/ArrowDown";

import cv from "../../assets/LucasGabrielOjeda.pdf";

import "./Inicio.scss";

const image =
  "https://res.cloudinary.com/the-kings-company/image/upload/v1661787469/Portafolio/IMG_20220828_120501_331_sehi6d.webp";

export const Inicio = ({ scrollToElement }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="container">
      <a
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        download="Lucas Gabriel Ojeda - Resume.pdf"
      >
        <div className="cvContainer">
          <DownloadIcon
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="550"
            data-aos="fade-down"
          />

          <h3
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos="fade-in"
          >
            Resume
            <div
              data-aos-offset="0"
              data-aos-duration="500"
              data-aos-delay="600"
              data-aos="fade-left"
              className="subrayado"
            ></div>
          </h3>
        </div>
      </a>

      <div className="containerTitleAndPicture">
        {!sm && !md && (
          <div
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos="zoom-in-down"
            className="containerTitleAndType"
          >
            <div className="containerTitle">
              <Typography variant="p">Lucas Gabriel Ojeda</Typography>
            </div>

            <div className="containerType">
              <Typography variant="p">
                Deployed to aws s3 service using CI/CD
              </Typography>
            </div>
          </div>
        )}

        <div className="containerPicture">
          <img
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos="zoom-in"
            src={image}
          />

          <div
            data-aos-offset="0"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            className="iconLinkedinContainer"
          >
            <a
              href="https://www.linkedin.com/in/lucas-ojeda-a03372225/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {(sm || md) && (
          <div
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos="zoom-in-down"
            className="containerTitleAndType"
          >
            <div className="containerTitle">
              <Typography variant="p">Lucas Gabriel Ojeda</Typography>
            </div>

            <div className="containerType">
              <Typography variant="p">
                Deployed to aws s3 service using CI/CD
              </Typography>
            </div>
          </div>
        )}
      </div>

      <div>
        <ArrowDown
          data-aos-offset="0"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos="fade-in"
        />
      </div>

      <div onClick={scrollToElement} className="arrowDownContainer"></div>
    </div>
  );
};
