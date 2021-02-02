import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './NavigationLink.css';

const NavigationLink = ({ topic, to, urls }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="topic__wrapper">
      <Link onClick={toggle} className="topic__navlink" to={to}>
        {topic} {open? <MdKeyboardArrowUp className='arrow-icon'/>:<MdKeyboardArrowDown className='arrow-icon'/>}
      </Link>
      {open && (
        <ul className="sub__navlinks">
          {urls.map((entry) => (
            <li className="sub__navlink">
              <Link key={entry.id} to={entry.url}>
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationLink;
