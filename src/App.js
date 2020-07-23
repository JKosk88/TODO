import React from 'react';
import './App.css';
import Tasks from './components/tasks.js';
import SideBar from './components/sideBar.js';
import NewTask from './components/newTask.js';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      tasks: [],
      index: undefined,
      dateDesc: true,
    }

    this.updateTasks = this.updateTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  addTask(event){
    event.preventDefault();

    let title = document.getElementById('titleInput').value;
    let hint = document.getElementById('hint');

    if (title === ''){
      hint.style.display = 'block';
    } else {
      hint.style.display = 'none';
      this.updateTasks();
    }
  }

  updateTasks(){
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

    if (this.state.index !== undefined){
      tasks[this.state.index] = task;
    } else {
      tasks.push(task);
    }
    
    this.setState({ tasks: tasks, index: undefined });

    document.getElementById('titleInput').value = '';
    document.getElementById('descriptionInput').value = '';
    document.getElementById('dateInput').value = '';
    document.getElementById('hourInput').value = '';

    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('newTask').style.display = 'none';
    document.getElementById('wrap').style.opacity = 1;
  }

  editTask(title){
    let tasks = [...this.state.tasks];
    
    let index = tasks.findIndex((element) => { 
      document.getElementById('titleInput').value = element.title;
      document.getElementById('descriptionInput').value = element.description;
      document.getElementById('dateInput').value = element.date;
      document.getElementById('hourInput').value = element.hour;

      return element.title === title 
    });

    this.setState({ index: index });
    document.getElementById('newTask').style.display = 'block';
    document.getElementById('wrap').style.opacity = .3;
  }

  cleanInput(){
    this.setState({ index: undefined });
  }

  removeTask(title){
    let tasks = [...this.state.tasks];

    let tasksWithout = tasks.filter(function(e) { return e.title !== title; });

    this.setState({ tasks: tasksWithout });
    localStorage.setItem('tasks', JSON.stringify(tasksWithout));
  }

  sortByDate(){
    const tasks = [...this.state.tasks];
    let order = this.state.dateDesc;
    
    function compareDate(a, b) {
      const dateA = a.date;
      const dateB = b.date;
    
      let comparison = 0;
      let order1 = 1
      let order2 = -1

      if (order){
        order1 = -1;
        order2 = 1;
      }

      if (dateA > dateB) {
        comparison = order1;
      } else if (dateA < dateB) {
        comparison = order2;
      } 
      return comparison;
    }

    let sortedDate = tasks.sort(compareDate);
    
    this.setState({ tasks: sortedDate, dateDesc: !this.state.dateDesc });

    localStorage.setItem('tasks', JSON.stringify(sortedDate));
  }

  componentDidMount(){
    
    if (!localStorage.getItem('tasks')){
      localStorage.setItem('tasks', JSON.stringify([{
        title: 'Title',
        description: 'Description',
        date: '2020-10-10',
        hour: '12:00'}]));
    }
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    this.setState({ tasks: tasks });
  }

  render(){

    return (
      <div id='app'>
        <h1 onClick={this.removeTask}>TODO List</h1>

        <div id='wrap'>
          <div id='navBar'>
            <SideBar sortByDate={this.sortByDate}/>
          </div>
            <Tasks 
              tasks={JSON.stringify(this.state.tasks)}
              removeTask={this.removeTask}
              editTask={this.editTask}/>
        </div>
        <NewTask updateTasks={this.addTask} cleanInput={this.cleanInput} />
      </div>
    );
  }
  
}

export default App;
