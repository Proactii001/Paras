import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Menus= (props) =>{

    return (
        <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
 
      <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>

    </ListGroup>

    );
}


export default Menus;