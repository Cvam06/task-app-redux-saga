import React from 'react'
import { ListGroup, Alert } from 'reactstrap';
import TaskItem from './TaskItem/TaskItem';
import Task from '../../../../models/Task';

function TaskList({ tasks }) {

    console.log("tasks = ",tasks)

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

export default TaskList
