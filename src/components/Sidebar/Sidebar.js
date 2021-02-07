import React from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import {URLS} from '../../../src/data/urls';
import { IoHome } from 'react-icons/io5';
import "./Sidebar.css";

const Sidebar = (props) => { 

  return (
    <div className="sidebar">
      <h2>TOPIC NAVIGATION</h2>
      <hr />
      <br />
      <div className="sidebar__navlinks">
        <div>
          <Link className="sidebar__navlink" to="/">
            Home <IoHome />
          </Link>
        </div>
        {
          URLS.map((urls)=>(
            <NavigationLink to={`/topic${urls.id}`} urls={urls} updateSectionDB={props.updateSectionDB}/>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
