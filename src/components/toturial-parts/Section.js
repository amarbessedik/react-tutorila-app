import React from "react";

const Section = (props) => {
  return (
    <div className="section">
      <h1>{props.heading}</h1>
      {props.children && (
        <div className="section__content">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Section;
