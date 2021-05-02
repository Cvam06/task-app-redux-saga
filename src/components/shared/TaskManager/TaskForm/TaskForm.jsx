import React, {Component} from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class TaskForm extends Component{
    state = {
        title : '',
        description: '',
        titleErr : '',
        descErr : ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {title, description} = this.state

        let valid = true;

        if(title === ''){
            this.setState({
                titleErr: 'Title can not be blank.'
            })
            valid = false 
        }
        else{
            this.setState({
                titleErr: ''
            })
        }

        if(description === ''){
            this.setState({
                descErr : 'Desctiption can not be blanked'
            })
            valid = false 
        }

        if(valid){
            const data = {
                title,
                description
            }

            this.props.addTask(data)

            this.setState({
                title : '',
                description : '',
                titleErr : '',
                descErr : ''
            })
        }
    }
    
    render(){
        const {title, description, titleErr, descErr} = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label htmlFor='title'>Title</Label>
                <Input id='title' value={title} onChange = {(e) => this.setState({title: e.target.value})}></Input>
                <span id="titleErr" style={{color: 'red', fontSize: '10px'}}>
                    {titleErr}
                </span>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='description'>Description</Label>
                <Input type="textarea" value={description} id='description' rows='5' onChange={(e)=>{this.setState({description : e.target.value})}}></Input>
                <span id="descErr" style={{color: 'red', fontSize: '10px'}}>
                    {descErr}
                </span>
            </FormGroup>

            <Button color='primary' type="submit">Add</Button>
        </Form>
        )
    }
}

export default TaskForm
