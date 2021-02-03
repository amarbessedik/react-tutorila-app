import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topic from "./components/Topic/Topic";
import "./index.css";

const sections1 = [
  {subtitle: "SECTION1", url: 'section1', rank: 0},
  {subtitle: "SECTION2", url: 'section2', rank: 1},
  {subtitle: "SECTION3", url: 'section3', rank: 2},
  {subtitle: "SECTION4", url: 'section4', rank: 3},
];
const sections2 = [
  {subtitle: "SECTION1", url: 'section1', rank: 0},
  {subtitle: "SECTION2", url: 'section2', rank: 1},
  {subtitle: "SECTION3", url: 'section3', rank: 2},
  {subtitle: "SECTION4", url: 'section4', rank: 3},
];
const sections3 = [
  {subtitle: "SECTION1", url: 'section1', rank: 0},
  {subtitle: "SECTION2", url: 'section2', rank: 1},
  {subtitle: "SECTION3", url: 'section3', rank: 2},
  {subtitle: "SECTION4", url: 'section4', rank: 3},
];
const sections4 = [
  {subtitle: "SECTION1", url: 'section1', rank: 0},
  {subtitle: "SECTION2", url: 'section2', rank: 1},
  {subtitle: "SECTION3", url: 'section3', rank: 2},
  {subtitle: "SECTION4", url: 'section4', rank: 3},
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
              children={<Topic title="TOPIC-1" sections={sections1} />}
            />
            <Route
              path="/topic2"
              children={<Topic title="TOPIC-2" sections={sections2} />}
            />
            <Route
              path="/topic3"
              children={<Topic title="TOPIC-3" sections={sections3} />}
            />
            <Route
              path="/topic4"
              children={<Topic title="TOPIC-4" sections={sections4} />}
            />
          </Switch>
        </Main>
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default App;
