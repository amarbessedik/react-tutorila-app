import React from 'react';
import './Section.css';

const Section = (props) => {
    return (
        <div className='section__container'>
             <h1>{props.title}</h1>
             {props.children}
        </div>
    );
} 

export default Section;
