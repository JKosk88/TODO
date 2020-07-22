import React from 'react';
import '../styles/tasks.css';
import Task from './task.js';

class tasks extends React.Component {

    render() {  

        const content = JSON.parse(this.props.tasks).map((task, index) =>
            <li key={index}>
                <Task
                title={task.title}
                description={task.description}
                color={task.color}
                removeTask={this.props.removeTask}
                editTask={this.props.editTask}/>
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