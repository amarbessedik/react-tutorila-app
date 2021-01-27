import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./GroupLinks.css";

const GroupLinks = ({ groupLink }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="grouplinks__wrapper">
      <Link to={groupLink.url}>
        <h4
          className="grouplinks__title"
          style={{ color: toggle ? "#000" : "#777" }}
          onClick={handleToggle}
        >
          <span id="title">{groupLink.title}</span>
          <span id="icon">{toggle ? <FiChevronUp /> : <FiChevronDown />}</span>
        </h4>
      </Link>
      {toggle && (
        <div className="grouplinks__content">
          <ul>
            {groupLink.links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GroupLinks;
