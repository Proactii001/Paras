import './App.css';
import {Button, Col, Container, Row} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddForm from './components/AddForm';
import Header from './components/Header';
import Menus from './components/menus';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
 
  
  return (
    <div className="App">
    <Router>
      <ToastContainer />
     
       <Header/>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />

        <Footer />
      
      </Router>
    
    </div>
  );
}

export default App;
