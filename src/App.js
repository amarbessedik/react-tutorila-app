import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topic from "./components/Topic/Topic";
import "./index.css";

const sections = [
  {subtitle: "SECTION1"},
  {subtitle: "SECTION2"},
  {subtitle: "SECTION3"},
  {subtitle: "SECTION4"},
];

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="app__content">
        <Main>
          <Switch>
            <Route
              path="/topic1"
              children={<Topic title="TOPIC-1" sections={sections} />}
            />
            <Route
              path="/topic2"
              children={<Topic title="TOPIC-2" sections={sections} />}
            />
            <Route
              path="/topic3"
              children={<Topic title="TOPIC-3" sections={sections} />}
            />
            <Route
              path="/topic4"
              children={<Topic title="TOPIC-4" sections={sections} />}
            />
          </Switch>
        </Main>
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default App;
