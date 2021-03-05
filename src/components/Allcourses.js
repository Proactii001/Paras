import React, { useState,useEffect } from 'react';
import Course from './Course';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Container,CardFooter
  } from 'reactstrap';
import base_url from '../Api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
  
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

  const Allcourese = () =>{

    useEffect(()=>{
        document.title="All Courses";
        getAllcustomerlist();
    },[]);


    //function call to server api here start
     const getAllcustomerlist=()=>{
         axios.get(`${base_url}/customerlist`,config).then(
             (Response)=>{
                console.log(Response)
                toast.success('Successfully Loaded')
             },
             (error)=>{
                 console.log(error);
                 toast.error('Server Problem, Please contact to admin')

             }
         )
     }



    const[Courses,setCourses]=useState([
        {title:"php",description:"Php courses"},
        {title:"java",description:"java courses"},
        {title:"ASP",description:"Asp courses"},
    ]);

    return (
        <div>
            <h1>List OF Course</h1>

            {
                Courses.length > 0
                ? Courses.map((item)=> <Course course={item} /> )
                   : "Data Not Found" 

            }



        </div>
    )



  }


  export default Allcourese;