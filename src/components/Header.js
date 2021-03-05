import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';


function  Header()
{
    return (
        <div>
            
        
   	<div id="wrapper">
		<section class="header-section">
			<header class="header container">
            <nav class="navbar navbar-expand-lg ">
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ListGroup className="navbar-nav mr-auto">
      <Link className="nav-link" tag="a" to="/" action>Home</Link>
      <Link className="nav-link" tag="a" to="#!" action>Add Course</Link>
      <Link className="nav-link" tag="a" to="#!" action>View Course</Link>
      <Link className="nav-link" tag="a" to="#!" action>About</Link>
      <Link className="nav-link" tag="a" to="/contact" action>Contact</Link>

    </ListGroup>
   
  
  </div>
</nav>
				
			</header>
		</section>

		
	</div>

    <div class="backtotop">Scroll to Top</div>
        </div>

    );
}

export default Header;
