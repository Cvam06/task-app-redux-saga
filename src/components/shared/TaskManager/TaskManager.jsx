import React from 'react'
import {Row, Col} from 'reactstrap';
import TaskForm from './TaskForm/TaskForm.jsx';
import TaskList from './TaskList/TaskList.jsx';
import Task from '../../../models/Task';

function TaskManager() {
    const tasks = [new Task(1, 'Learn ReactJS'),
                new Task(2, 'Learn Components'),
                new Task(3, 'Learn Props'),
                new Task(4, 'Learn Saga'),
                new Task(5, 'Learn Redux')]

    const addTask = (data) => {
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
