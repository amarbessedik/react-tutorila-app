import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './index.css';

const App = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="app__container">
            <Main />
            <Sidebar />
        </div>
      </React.Fragment>
    );
}

export default App;

