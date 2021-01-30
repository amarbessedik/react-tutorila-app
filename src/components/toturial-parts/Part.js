import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Part = (props) => {
  const { maxSection } = props;
  const [section, setSection] = useState(1);
  const [url, setUrl] = useState("");

  const next = () => {
    if (section === maxSection) {
      setUrl(`/part${props.part}/section${maxSection}`);
    } else {
      setSection(section + 1);
      setUrl(`/part${props.part}/section${section + 1}`);
    }
  };
  const prev = () => {
    if (section === 1) {
      setUrl(`/part${props.part}/section1`);
    } else {
      setSection(section - 1);
      setUrl(`/part${props.part}/section${section - 1}`);
    }
  };

  return (
    <div className="tut__part">
      <h1>{props.heading}</h1>
      {props.children}
      <div className="controls">
        <div className="btn previous-btn" onClick={prev}>
          <Link className="btn-link" to={url}>
            <GrPrevious className="btn-icon" />
          </Link>
        </div>
        <div className="btn next-btn" onClick={next}>
          <Link className="btn-link" to={url}>
            <GrNext className="btn-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
