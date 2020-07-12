import React from 'react';
import '../styles/tasks.css';
import Task from './task.js';

class tasks extends React.Component {
    render() {
        return (
            <div id='tasks'>
                <ul>
                    <li>
                        <Task title='Title' description='description' color='00c6f2'/>
                    </li>

                    <li>
                        <Task title='Title' description='description' color='00c6f2'/>
                    </li>

                    <li>
                        <Task title='Title' description='description' color='f200ad'/>
                    </li>

                    <li>
                        <Task title='Title' description='description' color='f2a900'/>
                    </li>

                    <li>
                        <Task title='Title' description='description'/>
                    </li>

                    <li>
                        <Task 
                        title='test' 
                        description='desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc ' 
                        color='000000' />
                    </li>

                    <li>
                        <Task 
                        title='test' 
                        description='desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc ' 
                        color='000000' />
                    </li>

                    <li>
                        <Task 
                        title='test' 
                        description='desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc ' 
                        color='000000' />
                    </li>

                    <li>
                        <Task 
                        title='test' 
                        description='desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc ' 
                        color='000000' />
                    </li>

                    <li>
                        <Task 
                        title='test' 
                        description='desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc ' 
                        color='000000' />
                    </li>
                </ul>
            </div>
        )
    }
}

export default tasks;