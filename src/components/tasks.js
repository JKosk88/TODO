import React from 'react';
import '../styles/tasks.css';
import Task from './task.js';

class tasks extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentWillMount(){
        // let localTasks;

        // localTasks = localStorage.setItem(tasks = [
        //     {id: 1, title: 'Hello World', description: 'Welcome to learning React!', color: '111fff'},
        //     {id: 2, title: 'Installation', description: 'You can install React from npm.', color: 'fff111'}
        // ])

        console.log(this.state.tasks)
    }

    render() {
            
            const content = this.state.tasks.map((task) =>
              <li key={task.id}>
                <Task title={task.title} description={task.description} color={task.color}/>
              </li>
            );


            return (
                <div id='tasks'>
                    <ul>
                        {content}
                    </ul>
                </div>
            );
    }
}

export default tasks;