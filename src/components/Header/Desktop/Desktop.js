import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './Desktop.css';

const Desktop = () => {
    return (
        <div className='desktop'>
            <div className="desktop__links"> 
                <ul>
                    <li><Link className='desktop-nav-link' to='/'>Link</Link></li>
                    <li><Link className='desktop-nav-link' to='/'>Link</Link></li>
                    <li><Link className='desktop-nav-link' to='/'>Link</Link></li>
                    <li><Link className='desktop-nav-link' to='/'>Link</Link></li>
                </ul>
            </div>
            <div className="search__field">
                <BsSearch id='search-icon'/><input id='search-input' type="text"/>
            </div>
        </div>
    );
}

export default Desktop;
