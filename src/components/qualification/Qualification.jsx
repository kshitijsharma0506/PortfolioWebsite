import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleTab, setToggleTab] = useState(1);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleTab === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>setToggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__active qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleTab === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>setToggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleTab === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">St. Joseph, Kota</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">Vellore Institute of Technology, Chennai</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Wipro Technologies</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleTab === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
              <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Wipro Technologies</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
