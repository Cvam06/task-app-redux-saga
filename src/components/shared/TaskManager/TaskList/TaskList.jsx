import React from 'react'
import { ListGroup, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import Task from '../../../../models/Task';

function TaskList({ tasks }) {

    console.log("Tasks = ",tasks)

    if(tasks.length === 0){
        return <Alert>No Tasks to show.</Alert>
    }

    const taskItem = tasks.map((task) => {
        return <TaskItem title={task.title}/>
    })
    return (
        <ListGroup>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task}/>
            })}
        </ListGroup>
    )
}

const mapStateToPros = (state) => { //store.getState()
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToPros)(TaskList)
