import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Section from "../Section/Section";
import "./Topic.css";

const Topic = (props) => {
  let { path,  } = useRouteMatch();
  const { sections, title } = props;

  const [sectionIndex, setSectionIndex] = useState(0);

  const prevSection = () => {
    //  console.log('prev: ', sectionIndex);
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
    } 
    // console.log('prev: ', sectionIndex);
  };
  const nextSection = () => {
    //   console.log('next: ', sectionIndex);
    if (sectionIndex < sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
    }
    // console.log('next: ', sectionIndex); 
  };
 
  return (
    <div className="topic__container">
      <h1>{title}</h1>
      <Switch>
        {sections.map((section, key) => (
          <Route
            key={key}
            path={`${path}/${section.url}`}
            children={
              <Section
                subtitle={section.subtitle}
              />
            }
          />
        ))}
      </Switch>
      <div className="ctrl__container">
        <div className="previous__ctrl" onClick={prevSection}>
          <Link to={`${path}/${sections[sectionIndex].url}`}>PREVIOUS</Link>
        </div>
        <div className="next__ctrl" onClick={nextSection}>
          <Link to={`${path}/${sections[sectionIndex].url}`}>NEXT</Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
