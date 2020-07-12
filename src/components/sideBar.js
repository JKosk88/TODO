import React from 'react';
import '../styles/sideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faCalendarAlt, faTasks, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

class sidebar extends React.Component{
    render() {
        return(
            <div id='sideBar'>
                <ul>
                    <li>
                        <div className='sideBarElement sideBar-hover'>
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
                        <div className='sideBarElement sideBar-hover'>
                            <FontAwesomeIcon icon={faSwatchbook} className='icon'/>
                            Change color
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default sidebar;