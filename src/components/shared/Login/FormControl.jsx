import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

function FormControl({label, type, handleChange, value, error, validate}) {
    console.log("error = ",error)
    return (
        <FormGroup>
            <Label for={label.toLowerCase()}>{label.toLowerCase()}</Label>
            <Input 
                type={type} 
                id={label.toLowerCase()}
                value={value}
                invalid={!!error}
                onChange={(event) => {handleChange(event.target.value);}}
            />
            {/* <FormFeedback>{label.toLowerCase() == "username" ? error.username : error.password }</FormFeedback> */}
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    )
}

export default FormControl
