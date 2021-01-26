import React from 'react';
import './Sidebar.css';
import DropdownText from './sub-components/DropdownText';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <DropdownText title='title' content='content'/>
        <DropdownText title='title' content='content'/>
        <DropdownText title='title' content='content'/>
        <DropdownText title='title' content='content'/>
      </div>
    );
}

export default Sidebar;
