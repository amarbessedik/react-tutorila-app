import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Section from "../Section/Section";
import "./Topic.css";

const Topic = (props) => {
  let { path } = useRouteMatch();
  const { sections, title } = props;
  const [index, setIndex ] = useState(props.section);
  
  console.log('TOPICX: ', props.section);

  return (
    <div className="topic__container">
      <h1>{title}</h1>
      <Switch>
        {sections.map((entry, key) => (
          <Route
            key={key}
            path={`${path}/${entry.url}`}
            children={<Section subtitle={entry.subtitle} />}
          />
        ))}
      </Switch>
      <div className="ctrl__container">
        <div className="previous__ctrl" onClick={()=>{setIndex(props.backward());}}>
          <Link to={path + `/section${index}`}>PREVIOUS</Link>
        </div>
        <div className="next__ctrl" onClick={()=>{setIndex(props.forward(sections));}}>
          <Link to={path + `/section${index}`}>NEXT</Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
