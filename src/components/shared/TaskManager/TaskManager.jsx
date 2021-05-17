import React, { useState } from 'react'
import {Row, Col} from 'reactstrap';
import TaskForm from './TaskForm/TaskForm.jsx';
import TaskList from './TaskList/TaskList.jsx';
import Task from '../../../models/Task';
import {tasksAll} from '../../../constants';

function TaskManager() {

    const [tasks, setTasks] = useState([]);


    const addTask = (data) => {
        const task = new Task(
            tasks.length + 1,
            data.title,
            data.description
        )

        setTasks([...tasks, task])
        console.log(data)
    }

    return (
        <Row>
            <Col>
                <TaskForm addTask = {addTask}></TaskForm>
            </Col>
            <Col>
                <TaskList tasks = {tasks}></TaskList>
            </Col>
        </Row>
    )
}

export default TaskManager
