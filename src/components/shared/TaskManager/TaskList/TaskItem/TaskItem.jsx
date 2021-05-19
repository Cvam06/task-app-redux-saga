import React from 'react'
import {ListGroupItem, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {deleteTaskAction} from "../../../../../actions/taskActions.js";

function TaskItem({key, task, deleteTask}) {
    const handleDelete = () => {
        deleteTask(task.id)
    }
    return (
        <ListGroupItem>
            {task.title}
            <Button close onClick={handleDelete}></Button>
        </ListGroupItem>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAction(id))
        }
    }
}
export default connect(null, mapDispatchToProps)(TaskItem)
