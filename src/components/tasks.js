import React from 'react';
import '../styles/tasks.css';
import Task from './task.js';

class tasks extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        };
    }

    render() {  

        const content = JSON.parse(this.props.tasks).map((task, index) =>
            <li key={index}>
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