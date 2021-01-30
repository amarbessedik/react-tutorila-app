import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import './Main.css';
import "./courses/Course.css";
// import Course from './courses/Course';
// import Section from './toturial-parts/Section';

const Main = (props) => {

    return (
      <div className="main__container">
        <div className="main">
         {props.children}
        </div>
      </div>
    );
}

export default Main;
