import React, { useState } from 'react'
import {Row, Col} from 'reactstrap';
import TaskForm from './TaskForm/TaskForm.jsx';
import TaskList from './TaskList/TaskList.jsx';
import Task from '../../../models/Task';
import {tasksAll} from '../../../constants';

function TaskManager() {

    return (
        <Row>
            <Col>
                <TaskForm ></TaskForm>
            </Col>
            <Col>
                <TaskList ></TaskList>
            </Col>
        </Row>
    )
}

export default TaskManager
