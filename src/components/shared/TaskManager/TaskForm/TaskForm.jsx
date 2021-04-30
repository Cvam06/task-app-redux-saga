import React, {Component} from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class TaskForm extends Component{

    titleErr = ''
    descErr = ''

    handleSubmit = (e) => {
        e.preventDefault()
        const title = document.getElementById('title');
        const description = document.getElementById('description');

        let valid = true;

        if(title.value === ''){
            this.titleErr = 'Title cannot be blank'
            this.forceUpdate()
            valid = false 
        }

        if(description.value === ''){
            this.descErr = 'Description cannot be blank'
            this.forceUpdate()
            valid = false 
        }

        if(valid){
            const data = {
                title: title.value,
                description: description.value,
            }
            this.props.addTask(data)

            title.value = ''
            description.value = ''
            this.titleErr = ''
            this.descErr = ''
            this.forceUpdate()
        }
    }
    
    render(){

        return (
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label htmlFor='title'>Title</Label>
                <Input id='title'></Input>
                <span id="titleErr" style={{color: 'red', fontSize: '10px'}}>
                    {this.titleErr}
                </span>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='description'>Description</Label>
                <Input type="textarea" id='description' rows='5'></Input>
                <span id="descErr" style={{color: 'red', fontSize: '10px'}}>
                    {this.descErr}
                </span>
            </FormGroup>

            <Button color='primary' type="submit">Add</Button>
        </Form>
        )
    }
}

export default TaskForm
