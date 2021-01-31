import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";


const App = () => {
  
  return (
    <React.Fragment>
      <Header />
      <div className="app__content">
        <Main />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default App;
