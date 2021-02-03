import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';


const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <h2>
              React<span>TuT</span>
            </h2>
          </Link>
        </div>
        <div id="navigation">
          <Desktop className="header__desktop" />
          <Mobile className="header__mobile" />
        </div>
      </div>
    );
}

export default Header;
