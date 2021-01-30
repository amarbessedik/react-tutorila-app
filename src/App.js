import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Course from "./components/courses/Course";
import Section from "./components/toturial-parts/Section";


const sections = [
  [
  <Section heading='SECTION I-1'/>,
  <Section heading='SECTION I-2'/>,
  <Section heading='SECTION I-3'/>,
],
  [
  <Section heading='SECTION II-1'/>,
  <Section heading='SECTION II-2'/>,
  <Section heading='SECTION II-3'/>,
],
  [
  <Section heading='SECTION III-1'/>,
  <Section heading='SECTION III-2'/>,
  <Section heading='SECTION III-3'/>,
],
  [
  <Section heading='SECTION IV-1'/>,
  <Section heading='SECTION IV-2'/>,
  <Section heading='SECTION IV-3'/>,
],
  [
  <Section heading='SECTION V-1'/>,
  <Section heading='SECTION V-2'/>,
  <Section heading='SECTION V-3'/>,
],
  [
  <Section heading='SECTION VI-1'/>,
  <Section heading='SECTION VI-2'/>,
  <Section heading='SECTION VI-3'/>,
],
  [
  <Section heading='SECTION VII-1'/>,
  <Section heading='SECTION VII-2'/>,
  <Section heading='SECTION VII-3'/>,
],
  [
  <Section heading='SECTION VIII-1'/>,
  <Section heading='SECTION VIII-2'/>,
  <Section heading='SECTION VIII-3'/>,
],
  [
  <Section heading='SECTION IX-1'/>,
  <Section heading='SECTION IX-2'/>,
  <Section heading='SECTION IX-3'/>,
],
  [
  <Section heading='SECTION X-1'/>,
  <Section heading='SECTION X-2'/>,
  <Section heading='SECTION X-3'/>,
],

]

const courses = [
  {
    title:"course_I",
    sections:sections[0]
  },
  {
    title:"course_II",
    sections:sections[1]
  },
  {
    title:"course_III",
    sections:sections[2]
  },
  {
    title:"course_VI",
    sections:sections[3]
  },
  {
    title:"course_V",
    sections:sections[4]
  },
  {
    title:"course_VI",
    sections:sections[5]
  },
  {
    title:"course_VII",
    sections:sections[6]
  },
  {
    title:"course_VIII",
    sections:sections[7]
  },
  {
    title:"course_IX",
    sections:sections[8]
  },
  {
    title:"course_X",
    sections:sections[9]
  },
  
];

const App = () => {
  
  return (
    <React.Fragment>
      <Header />
      <div className="app__container">
        <Main>
          <Switch>
            {courses.map((course, index) => (
              <Route
                exact={true}
                key={index}
                path={`/${course.title}`}
                children={
                  <Course title={course.title} sections={sections[index]} />
                }
              />
            ))}
          </Switch>
        </Main>
        <Sidebar />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
