import React, { useState } from 'react';
import {Row, Col, Form, Button} from 'reactstrap';
import FormControl from "./FormControl.jsx";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        setErrors({})
        if(username == ""){
            errors.username = "Username Can not be null";
        }
        else{
            errors.username && delete errors.username;
        }
        if(password == ""){
            errors.password = "Password Can not be null";
        }
        else{
            errors.password && delete errors.password;
        }

        setErrors(errors);
        console.log("errors = ",errors)
    }
    const handleSubmit =() => {
        validate();
        console.log("username = ",username," password = ",password);
    }

    return (
        <div>
            <Row>
                <Col md={8}>
                    <FormControl 
                        label="Username" 
                        type="text"
                        value={username}
                        handleChange={(data)=>{setUsername(data);}}
                        validate = {validate}
                        error={errors.username}/>
                    <FormControl 
                        label="Password" 
                        type="password" 
                        value={password}
                        handleChange={(data)=>{setPassword(data);}} 
                        validate = {validate}
                        error={errors.password}/>
                    <Form>
                        <Button color="primary" onClick={handleSubmit}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login
