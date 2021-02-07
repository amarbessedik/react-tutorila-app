import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Section from "../Section/Section";
import "./Topic.css";

const Topic = (props) => {
  const { data, currentSection } = props;
  const { path } = useRouteMatch();
  const length = data.sections.length;

  const prevSection = () => {
    if (currentSection > 0) {
      props.updateSectionDB(currentSection - 1);
    }
  };
  const nextSection = () => {
    if (currentSection < data.sections.length - 1) {
      props.updateSectionDB(currentSection + 1);
    }
  };

  const _prev = (section) => (section > 0 ? section - 1 : 0);
  const _next = (section, length) => (section < length ? section + 1 : length); 

  return (
    <div className="topic__container">
      <h1>{data.title}</h1>
      <Switch>
        {data.sections.map((section) => (
          <Route
            key={section.id}
            path={path + `/${section.url}`}
            children={<Section title={section.title} />}
          />
        ))}
      </Switch>
      <div className="ctrl__container">
        <div className="prev__ctrl">
          <Link
            style={
              props.currentSection <= 0
                ? { pointerEvents: "none", opacity: 0.4 }
                : {}
            }
            onClick={prevSection}
            to={`${path}/section${_prev(currentSection)}`}
          >
            PREVIOUS
          </Link>
        </div>
        <div className="next__ctrl">
          <Link
            style={
              props.currentSection >= length - 1
                ? { pointerEvents: "none", opacity: 0.4 }
                : {}
            }
            onClick={nextSection}
            to={`${path}/section${_next(currentSection, length - 1)}`}
          >
            NEXT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
