import React, {Component} from 'react';
import './Home.css';
import back from './back.svg';
import log from './log.svg';
import Form from 'react-bootstrap/Form';
import {Route, HashRouter, NavLink} from 'react-router-dom'
import Main from './Mainpage';

class Home extends Component {
    render() {
        return (
            <HashRouter>
            <div className="Home"> 
          <header>
          <img src={back} className="Home-back" alt=":)" />
        <img src={log} className="Home-log" alt=":)" />
        
        <Form className="Form">
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Label>  </Form.Label>
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Label>  </Form.Label>
  
  
  <NavLink to="/Home/Main" className="Home-link" variant="dark">log in</NavLink></Form>
  </header>
</div>
<div className="content">
    <Route path="/Home/Main" component={Main} /></div>
    </HashRouter>  
      
      );
  }
  
}

export default Home;