import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Part from "./components/toturial-parts/Part";
import Section from "./components/toturial-parts/Section";
import Main from "./components/Main";
import Footer from "./components/Footer";

const routes = [
  {
    path: "/",
    exact: true,
    component: <Main />,
  },
  {
    path: "/part1",
    exact: true,
    component: <Part heading="PART I" />,
  },
  {
    path: "/part2/section1",
    exact: true,
    component: <Section heading="SECTION I" />,
  },
  {
    path: "/part2/section2",
    exact: true,
    component: <Section heading="SECTION II" />,
  },
  {
    path: "/part2",
    exact: true,
    component: <Part heading="PART II" />,
  },
  {
    path: "/part2/section1",
    exact: true,
    component: <Section heading="SECTION I" />,
  },
  {
    path: "/part2/section2",
    exact: true,
    component: <Section heading="SECTION II" />,
  },
];

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="app__container">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.component}
            />
          ))}
        </Switch>
        <Sidebar />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
