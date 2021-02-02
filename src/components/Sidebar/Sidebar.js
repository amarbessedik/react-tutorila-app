import React from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import "./Sidebar.css";

const urls1 = [
    {   
        id:'1',
        topic: 'Topic-1',
        title: 'Section-1',
        url: '/topic1/section1'
    },
    {   
        id:'2',
        topic: 'Topic-1',
        title: 'Section-2',
        url: '/topic1/section2'
    },
    {   
        id:'3',
        topic: 'Topic-1',
        title: 'Section-3',
        url: '/topic1/section3'
    },
];
const urls2 = [
    {   
        id:'1',
        topic: 'Topic-2',
        title: 'Section-1',
        url: '/topic2/section1'
    },
    {   
        id:'2',
        topic: 'Topic-2',
        title: 'Section-2',
        url: '/topic2/section2'
    },
    {   
        id:'3',
        topic: 'Topic-2',
        title: 'Section-3',
        url: '/topic2/section3'
    },
];
const urls3 = [
    {   
        id:'1',
        topic: 'Topic-3',
        title: 'Section-1',
        url: '/topic3/section1'
    },
    {   
        id:'2',
        topic: 'Topic-3',
        title: 'Section-2',
        url: '/topic3/section2'
    },
    {   
        id:'3',
        topic: 'Topic-3',
        title: 'Section-3',
        url: '/topic3/section3'
    },
];

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h2>SIDEBAR NAVIGATION</h2>
      <hr />
      <br />
      <div className="sidebar__navlinks">
        <div>
          <Link className="sidebar__navlink" to="/">
            Home
          </Link>
        </div>
        <NavigationLink topic='Topic-1' to='/topic1' urls={urls1} />
        <NavigationLink topic='Topic-2' to='/topic2' urls={urls2} />
        <NavigationLink topic='Topic-3' to='/topic3' urls={urls3} />
      </div>
    </div>
  );
};

export default Sidebar;
