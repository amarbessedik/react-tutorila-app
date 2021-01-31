import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineClose } from "react-icons/ai";
import './Mobile.css';

const Mobile = () => {
    const [open, setOpen] = useState(false);

    const toggle = () =>{
        setOpen(!open);
    }

    return (
      <div className="mobile">
        <div className="icon__container">
          {!open ? (
            <CgMenuLeft className="menu__icon" onClick={toggle} />
          ) : (
            <AiOutlineClose className="menu__icon" onClick={toggle} />
          )}
        </div>
        {open && (
          <div className="menu__links">
            <ul>
              <li>
                <Link className="mobile-nav-link" to="/">
                  Link
                </Link>
              </li>
              <li>
                <Link className="mobile-nav-link" to="/">
                  Link
                </Link>
              </li>
              <li>
                <Link className="mobile-nav-link" to="/">
                  Link
                </Link>
              </li>
              <li>
                <Link className="mobile-nav-link" to="/">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
}

export default Mobile;
