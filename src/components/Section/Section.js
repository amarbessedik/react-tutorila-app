import React from 'react';
import './Section.css';

const Section = (props) => {
    return (
        <div className='section__container'>
             <h3>{props.subtitle}</h3>
             {props.children}
        </div>
    );
}

export default Section;
