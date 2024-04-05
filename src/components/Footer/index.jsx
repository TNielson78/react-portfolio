import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const linkedinUrl = "https://www.linkedin.com/in/tnielson0178";
    const githubUrl = "https://github.com/TNielson78"
    return (
        <footer>
            <h4>
                Travis Nielson 2024
            </h4>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                {/* <img src={linkedinLogo} alt="LinkedIn" style={{ width: '50px', height: '50px', marginTop: '10px' }} /> */}
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </footer>
    );
}

export default Footer;
