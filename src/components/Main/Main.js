import React from 'react';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = (props) => {
    return (
      <div className="main__wrapper">
        <div className='main__content'>
          <h1>MAIN</h1>
          {props.children}
        </div>
        <Footer />
      </div>
    );
}

export default Main;
