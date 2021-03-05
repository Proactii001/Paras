import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Container,CardFooter
  } from 'reactstrap';

  const Course = ({course}) =>{

   
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weigth-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color="danger" className="ml-3">Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )



  }


  export default Course;