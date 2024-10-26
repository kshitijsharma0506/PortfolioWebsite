import React from 'react';
import Hand from '../../assets/Hand';
import SendIcon from '../../assets/SendIcon';
import './home.css';


const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home_title">Kshitij Sharma
            <Hand/>
            </h1>
            <h3 className="home__subtitle">Front End Developer</h3>
            <p className="home__description">Front-end developer with 2 years of React JS experience. Skilled in JavaScript, HTML, CSS, RESTful APIs. Developed responsive web applications & optimized performance. Collaborative in Agile teams, focused on accessible, user-friendly interfaces. Creating innovative solutions & exceptional user experiences and seeking to apply expertise efficiently.</p>
            <a href="#contact" className="button button--flex">
                Say Hi!!
                <SendIcon/>
            </a>
        </div>
    )
}

export default Data