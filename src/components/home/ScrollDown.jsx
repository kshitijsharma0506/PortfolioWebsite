import React from 'react';
import ScrollIcon from '../../assets/ScrollIcon.jsx';
import './home.css';


const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <ScrollIcon />
            <span className="home__scroll-name">Scroll Down</span>
            <i className='uil uil-arrow-down home__scroll-arrow'></i>
        </a>
    </div>
  )
}

export default ScrollDown;