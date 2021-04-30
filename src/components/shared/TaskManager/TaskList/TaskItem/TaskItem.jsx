import React from 'react'
import {ListGroupItem, Button} from 'reactstrap';

function TaskItem({key, task}) {
    return (
        <ListGroupItem>
            {task.title}
            <Button close></Button>
        </ListGroupItem>
    )
}

export default TaskItem
