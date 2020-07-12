import React from 'react';
import './App.css';
import Tasks from './components/tasks.js';
import SideBar from './components/sideBar.js'


function App() {
  return (
    <div id='app'>
    
      <h1>TODO List</h1>

      <div id='wrap'>
        <div id='navBar'>
          <SideBar />
        </div>
        <div id='tasks'>
          <Tasks />
        </div>
      </div>
        
    </div>
  );
}

export default App;
