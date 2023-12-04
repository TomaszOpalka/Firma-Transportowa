
import React from 'react';
import './_header.scss';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img className="logo__img" src="/src/images/KMT logo Negatyw PNG.png"/>
                    {/*<img className="logo__img" src="/src/images/KMT logo PNG.png"></img>*/}
            </div>
            <ul className='header__ulist'>
                <li className="header__list"><Link className="header__link" to="/form"> Strona główna</Link> </li>
                <li className="header__list"><Link className="header__link" to="/about">o firmie</Link>  </li>
                <li className="header__list"><Link className="header__link" to="/contact"> kontakt</Link> </li>
                <li className="header__list"><Link className="header__link" to="/gallery">galeria</Link>  </li>
            </ul>
        </div>
    );
}

export default Header;
