import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./NavigationLink.css";

const NavigationLink = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    props.updateSectionDB(-1);
  };

  return (
    <div className="topic__wrapper">
      <div onClick={toggle} className="topic__wrapper">
        <span>
          <Link className="topic__title" to={props.to}>
            {props.urls.topic}
            {open ? (
              <MdKeyboardArrowUp className="arrow-icon" />
            ) : (
              <MdKeyboardArrowDown className="arrow-icon" />
            )}
          </Link>
        </span>
      </div>
      {open && (
        <ul className="sub__navlinks">
          {props.urls.links.map((entry, index) => (
            <li
              key={entry.id}
              onClick={() => {
                props.updateSectionDB(index);
              }}
            >
              <Link className="sub__navlink" to={entry.url}>
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
