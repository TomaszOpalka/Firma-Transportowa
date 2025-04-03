import React from "react";
import "./_header.scss";
import {
  Link,
} from "react-router-dom";
import kmtlogo from "/public/images/KMT logo Negatyw PNG.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo__img" src={kmtlogo} alt="Logo KMT" />
      </div>
      <ul className="header__ulist">
        <li className="header__list">
          <Link className="header__link" to="/mainpage">
            {" "}
            Strona główna
          </Link>{" "}
        </li>
        <li className="header__list">
          <Link className="header__link" to="/about">
            o firmie
          </Link>{" "}
        </li>
        <li className="header__list">
          <Link className="header__link" to="/contact">
            {" "}
            kontakt
          </Link>{" "}
        </li>
        {/*<li className="header__list"><Link className="header__link" to="/gallery">galeria</Link>  </li>*/}
      </ul>
    </div>
  );
}

export default Header;
