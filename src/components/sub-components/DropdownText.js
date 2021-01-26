import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import './DropdownText.css'


const DropdownText = ({title, content}) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    return (
      <div className="dropdown__wrapper">
        <Link to={`/${title}`}>
          <h4
            className="dropdown__title"
            style={{ color: toggle ? "#000" : "#777" }}
            onClick={handleToggle}
          >
            <span id="title">{title}</span>
            <span id="icon">
              {toggle ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </h4>
        </Link>
        {toggle && (
          <div className="dropdown__content">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
}

export default DropdownText;
