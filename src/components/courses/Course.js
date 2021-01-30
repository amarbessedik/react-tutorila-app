import React, { useState } from "react";
import "./Course.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

// const Section = ({ rank, content }) => (
//   <div className="course__section">
//     <h1>Section-{`${rank}`}</h1>
//     <p>{content}</p>
//   </div>
// );

// const sections = [
//   <Section rank={1} content="Lorem hypsum zdek rak 1" />,
//   <Section rank={2} content="Lorem hypsum azul azul 2" />,
//   <Section rank={3} content="Lorem hypsum talmirt talmirt 3" />,
//   <Section rank={4} content="Lorem hypsum amek amek 4" />,
// ];

const Course = ({ title, sections }) => {
  const [section, setSection] = useState(0);

  const advance = () => {
    if (section < sections.length - 1) {
      setSection(section + 1);
    } else {
    //   nextCourse();
    }
  };

  const back = () => {
    if (section > 0) {
      setSection(section - 1);
    } else {
    //   previousCourse();
    }
  };
  return (
    <div className="course__container">
      <h1>{title}</h1>
      {sections[section]}
      <div className="course__controls">
        <div className="control__section" onClick={back}>
          <GrPrevious className="btn-icon" />
        </div>
        <div className="control__section" onClick={advance}>
          <GrNext className="btn-icon" />
        </div>
      </div>
    </div>
  );
};

export default Course;
