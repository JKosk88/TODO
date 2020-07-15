import React from 'react';
import '../styles/sideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faCalendarAlt, faTasks, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

class sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            colorShow: false,
        };
        this.showNewTask = this.showNewTask.bind(this);
        this.showColors = this.showColors.bind(this);
    }

    showNewTask() {
        document.getElementById('newTask').style.display = 'block';
    }

    showColors() {
        if(!this.state.colorShow){
            document.getElementById('colors').style.display = 'flex';
            this.setState({ colorShow: true });
        } else {
            document.getElementById('colors').style.display = 'none';
            this.setState({ colorShow: false });
        }
    }
    

    render() {

        return(
            <div id='sideBar'>
                <ul>
                    <li>
                        <div className='sideBarElement sideBar-hover' onClick={this.showNewTask}>
                            <FontAwesomeIcon icon={faFileAlt} className='icon'/>
                            New Task
                        </div>
                    </li>
                    <li>
                        <div className='sideBarElement sideBar-hover'>
                            <FontAwesomeIcon icon={faCalendarAlt} className='icon'/>
                            Sort by date
                        </div>
                    </li>
                    <li>
                        <div className='sideBarElement sideBar-hover'>
                            <FontAwesomeIcon icon={faTasks} className='icon'/>
                            Sort by priority
                        </div>
                    </li>
                    <li>
                        <div className='sideBarElement sideBar-hover'onClick={this.showColors}>
                            <FontAwesomeIcon icon={faSwatchbook} className='icon'/>
                            Change color
                        </div>
                    </li>
                    <li>
                        <div id='colors'>
                            <div className='color' id='red'></div>
                            <div className='color' id='green'></div>
                            <div className='color' id='blue'></div>
                            <div className='color' id='yellow'></div>
                            <div className='color' id='orange'></div>
                            <div className='color' id='pink'></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default sidebar;