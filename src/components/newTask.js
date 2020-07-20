import React from 'react';
import '../styles/newTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class newTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
        };
        
        this.close = this.close.bind(this);
        this.setToday = this.setToday.bind(this);
        this.setTomorrow = this.setTomorrow.bind(this);
        this.setThisWeek = this.setThisWeek.bind(this);
    }

    close(){
        document.getElementById('newTask').style.display = 'none';
    }

    setToday(event){
        event.preventDefault();

        let today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        
        let todayDate = `${yyyy}-${mm}-${dd}`;

        document.getElementById('dateInput').value = todayDate;
    }

    setTomorrow(event){
        event.preventDefault();

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        var dd = tomorrow.getDate();
        var mm = tomorrow.getMonth() + 1;
        var yyyy = tomorrow.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        
        let tomorrowDate = `${yyyy}-${mm}-${dd}`;

        document.getElementById('dateInput').value = tomorrowDate;
    }

    setThisWeek(event){
        event.preventDefault();

        const today = new Date();
        const thisWeek = new Date(today);
        thisWeek.setDate(thisWeek.getDate() + (7 - thisWeek.getDay()))

        var dd = thisWeek.getDate();
        var mm = thisWeek.getMonth() + 1;
        var yyyy = thisWeek.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        
        let thisWeekDate = `${yyyy}-${mm}-${dd}`;

        document.getElementById('dateInput').value = thisWeekDate;
    }

    render() {

        return (
            <div id='newTask'>
                <FontAwesomeIcon icon={ faTimesCircle } id='close' onClick={this.close}/>
                <form>
                    <p className='input-description' >Title</p>
                    <input type='text' className='input' id='titleInput'/>
                    
                    <p className='input-description' >Description</p>
                    <textarea type='text' className='input' id='descriptionInput'/>

                    <p className='input-description' >Deadline date <span>(optional)</span></p>
                    <input type='date' className='input' id='dateInput'/>

                    <p className='input-description' >Deadline hour <span>(optional)</span></p>
                    <input type='time' className='input' id='hourInput'/>

                    <p id='hint'>Title is required.</p>

                    <div id='buttonWrapper'>
                        <button className='button' onClick={this.setToday} >Today</button>
                        <button className='button' onClick={this.setTomorrow} >Tomorrow</button>
                        <button className='button' onClick={this.setThisWeek} >This week</button>
                    </div>
                    
                    <button id='addTask' onClick={this.props.updateTasks}>Add Task</button>

                </form>
                
            </div>
        )
    }
}

export default newTask;
