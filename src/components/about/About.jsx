import React from 'react';
import "./about.css";
import AboutImg from '../../assets/about.jpg';
import Info from './Info.jsx';
import CV from '../../assets/Resume_ks.pdf';
import FilesIcon from '../../assets/FilesIcon.jsx';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">Frontend
                        developer, I create web pages with UI / UX user
                        interface, I have years of experience and many
                        clients are happy with the projects carried out .</p>

                    <a download="" href={CV} className="button button -- flex">Download CV <FilesIcon/> </a>                    
                </div>
            </div>
        </section>

    )
}

export default About;