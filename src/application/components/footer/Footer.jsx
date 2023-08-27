import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.scss';


export const Footer = ({ position }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);
    

    return (
        <div
            className={(position === 'absolute') ? "footerContainerAbsolute" : "footerContainerRelative"}
        >

            <p>Contact</p>

            <div className="iconContainer">

                <a
                    href='https://www.linkedin.com/in/lucas-ojeda-a03372225/'
                    target="_blank"
                >
                    <LinkedInIcon className="icons raise" />
                </a>

                <a
                    href='https://github.com/lucasgojeda'
                    target="_blank"
                >
                    <GitHubIcon className="icons raise" />
                </a>

                <a
                    href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsdCtjwgbBWLjPCnzhDjhkhvxLZKLcbclBxKTMgPQsPTFFVkVzdVvTPXJnrddbPpXmbVCvQB'
                    target="_blank"
                >
                    <MailIcon className="icons raise" />
                </a>

                <a
                    href='https://wa.me/542213173888/'
                    target="_blank"
                >
                    <WhatsAppIcon className="icons raise" />
                </a>

                <a
                    href='https://www.instagram.com/lucass_ojedaa/'
                    target="_blank"
                >
                    <InstagramIcon className="icons raise" />
                </a>

                <a
                    href='https://www.facebook.com/lucas.ojeda.10888'
                    target="_blank"
                >
                    <FacebookIcon className="icons raise" />
                </a>

            </div>
        </div>
    )
}
