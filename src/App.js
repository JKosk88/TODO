import React from 'react';
import './App.css';
import Tasks from './components/tasks.js';
import SideBar from './components/sideBar.js';
import NewTask from './components/newTask.js';
import tasks from './components/tasks.js';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      tasks: [],
    }
    this.updateTasks = this.updateTasks.bind(this);
  }

  updateTasks(event){
    event.preventDefault();

    let id = parseInt(localStorage.getItem('id')) + 1;
    localStorage.setItem('id', id);

    let color = localStorage.getItem('color');
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;
    let date = document.getElementById('dateInput').value;
    let hour = document.getElementById('hourInput').value;

    let task = {
        'title': title,
        'description': description,
        'hour': hour,
        'date': date,
        'color': color,
    }

    let tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({ tasks: tasks });

    document.getElementById('titleInput').value = '';
    document.getElementById('descriptionInput').value = '';
    document.getElementById('dateInput').value = '';
    document.getElementById('hourInput').value = '';
  }

  render(){
    return (
      <div id='app'>
        <h1>TODO List</h1>

        <div id='wrap'>
          <div id='navBar'>
            <SideBar />
          </div>
            <Tasks tasks={JSON.stringify(this.state.tasks)}/>
        </div>
        <NewTask updateTasks={this.updateTasks} />
      </div>
    );
  }
  
}

export default App;
