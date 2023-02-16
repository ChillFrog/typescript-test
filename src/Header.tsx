import React from "react";
import logoWebP from "./assets/img/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <menu className="header__menu">
        <ul className="header__list">
          <li className="header__logo">
            <a href="/">
              <picture>
                <source srcSet={logoWebP} type="image/webp" />
                <img src="./assets/img/logo.png" alt="Logo" />
              </picture>
            </a>
          </li>
          <li className="header__item">
            <a href="/football">Футбол</a>
          </li>
          <li className="header__item">
            <a href="/football">Баскетбол</a>
          </li>
          <li className="header__item">
            <a href="/football">Волейбол</a>
          </li>
          <li className="header__item">
            <a href="/football">Хоккей</a>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
