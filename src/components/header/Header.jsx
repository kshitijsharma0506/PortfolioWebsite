import React, { useState } from "react";
import "./header.css";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

const Header = () => {
  window.addEventListener("scroll", function () {
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    const header = document.querySelector(".header");
    if (this.scrollY >= 80){
      header.classList.add("scroll-header");
    } else{
      header.classList.remove("scroll-header");
    }
  });

  const [ToggleMenu, showToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    showToggleMenu(!ToggleMenu);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Kshitij
        </a>
        <div className={ToggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon active-link"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
            <li className="nav__item">
                <ThemeToggle />
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={handleToggleMenu}></i>
        </div>
        <div className="nav__toggle" onClick={handleToggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
