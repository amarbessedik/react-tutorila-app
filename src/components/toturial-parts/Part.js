import React from 'react';

const Part = (props) => {
    return (
      <div className="tut__part">
        <h1>{props.heading}</h1>
        {props.children}
      </div>
    );
}

export default Part;
