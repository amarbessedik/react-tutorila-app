import React from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import "./Sidebar.css";

const urls = [
    {   
        id:'1',
        topic: 'Topic-1',
        title: 'Section-1',
        url: '/topic1/section1'
    },
    {   
        id:'2',
        topic: 'Topic-1',
        title: 'Section-1',
        url: '/topic1/section2'
    },
    {   
        id:'3',
        topic: 'Topic-1',
        title: 'Section-1',
        url: '/topic1/section3'
    },
];

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>
      <br />
      <hr />
      <br />
      <div className="sidebar__navlinks">
        <div>
          <Link className="sidebar__navlink" to="/">
            Home
          </Link>
        </div>
        <NavigationLink topic='Topic-1' to='/topic1' urls={urls} />
      </div>
    </div>
  );
};

export default Sidebar;
