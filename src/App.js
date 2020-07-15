import React from 'react';
import './App.css';
import Tasks from './components/tasks.js';
import SideBar from './components/sideBar.js';
import NewTask from './components/newTask.js';


function App() {
  return (
    <div id='app'>
      <h1>TODO List</h1>

      <div id='wrap'>
        <div id='navBar'>
          <SideBar />
        </div>
          <Tasks />
      </div>
      <NewTask />
        
    </div>
  );
}

export default App;
