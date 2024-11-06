import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-award about__icon'></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">2+ Years Working</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
            <i className='bx bx-support about__icon'></i>
                <h3 className="about_title">Connect</h3>
                <span className="about_subtitle">Online 24/7</span>
            </div>
        </div>
    )
}
export default Info;