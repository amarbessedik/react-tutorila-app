import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Section from "../Section/Section";
import "./Topic.css";

const Topic = (props) => {
  const { path,  } = useRouteMatch();

  return (
    <div className="topic__container">
      <h1>{props.title}</h1>
      <Switch>
        {props.sections.map((section, key) => (
          <Route
            key={key}
            path={`${path}/${section.subtitle}`}
            children={<Section subtitle={section.subtitle} />}
          />
        ))}
      </Switch>
    </div>
  );
};

export default Topic;
