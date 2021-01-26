import React from 'react';
import './Header.css';
import {DiReact} from 'react-icons/di';
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <DiReact className='logo-icon'/> React <span>Tutorials</span>
        </div>
        <div className="middle__links">
            <ul className='link__list'>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
        </div>
        <div className="search__input">
            <BsSearch />
            <input type="text"/>
        </div>
        <div className="left__links">
            <ul className='link__list'>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
        </div>
      </div>
    );
}

export default Header;
