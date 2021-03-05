import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const AddForm =()=>{

    useEffect(()=>{
        document.title="ADD Form | Front Side";
    },[]);


    return (
        <Form>
            <FormGroup>
                <Label>Email</Label>
                <Input type="text" name="Email" placeholder="Enter Email address" />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="passsword" placeholder="Enter Password" />
            </FormGroup>
            <Container>
                <Button color="success">Login</Button>
            </Container>
        </Form>
    );

}

export default AddForm;