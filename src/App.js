import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topic from "./components/Topic/Topic";
import {topics} from '../src/data/topics'
import "./index.css";


const App = () => {
  const [sectionDB, setSectionDB] = useState(-1);

  const updateSectionDB = (section) => {
    setSectionDB(section);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="app__content">
        <Main>
          <Switch>
            {topics.map((topic) => (
              <Route
                key={topic.id}
                path={topic.url}
                children={
                  <Topic
                    data={topic}
                    currentSection={sectionDB}
                    updateSectionDB={updateSectionDB}
                  />
                }
              />
            ))}
          </Switch>
        </Main>
        <Sidebar updateSectionDB={updateSectionDB} />
      </div>
    </React.Fragment>
  );
};

export default App;
