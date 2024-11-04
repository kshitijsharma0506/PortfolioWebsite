import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Smith</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="#" className="home__social-icon">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/kshitijsharma0506" target='_blank' className="home__social-icon">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kshitij56" target='_blank' className="home__social-icon">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;