import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../styles/tasks.css';

class tasks extends React.Component {
    render() {
        return (
            <div id='tasks'>
                <ol>
                    <li>taks 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                    <li>task 4</li>
                </ol>
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        )
    }
}

export default tasks;