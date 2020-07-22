import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';

class task extends React.Component{
    constructor(props){
        super(props);

        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    removeTask(){
        this.props.removeTask(this.props.title);
    }

    editTask(){
        this.props.editTask(this.props.title);
    }

    render() {
        
        const divStyle = {
            backgroundColor: '#' + this.props.color,
        }

        return (
            <div className='task'>
                <div style={ divStyle } className='circle'></div>
                <h2>{ this.props.title }</h2>
                <br/>
                
                <div className='descriptionWrapper'>
                    <p>{ this.props.description }</p>
                    <span className='icons'>
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                    <FontAwesomeIcon icon={faTrashAlt} onClick={this.removeTask}/>
                    <FontAwesomeIcon icon={faPen} onClick={this.editTask}/>
                </span>
                </div>
                
            </div>
        )
    }
}

export default task;