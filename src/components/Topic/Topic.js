import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Section from "../Section/Section";
import "./Topic.css";

const Topic = (props) => {
  const { path,  } = useRouteMatch();
  const {sections, title} = props;

  const [section, setSection] = useState(0); 

  const prevSection = () =>{
    if(section > 0){
        setSection(section - 1);
    }else{
        setSection(0);
    }
  }
  const nextSection = () =>{
    if (section < sections.length - 1) {
      setSection(section + 1);
    }else{
        setSection(sections.length - 1);
    }
  }

  return (
    <div className="topic__container">
      <h1>{title}</h1>
      <Switch>
        {sections.map((section, key) => (
          <Route
            key={key}
            path={`${path}/${section.subtitle}`}
            children={<Section subtitle={section.subtitle} />}
          />
        ))}
      </Switch>
      <div className="ctrl__container">
        <div className="previous__ctrl" onClick={prevSection}>
          <Link to={`${path}/${sections[section].url}`}>PREVIOUS</Link>
        </div>
        <div className="next__ctrl" onClick={nextSection}>
          <Link to={`${path}/${sections[section].url}`}>NEXT</Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
