import logo from './logo.svg';
import back from './back.svg';
import pic from './pic.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Home from './Home';

class App extends Component {
    render() {
    return (
      <HashRouter>
       <div className="App">
       <style>@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');</style>
       <img src={back} className="App-back" alt=":)" />
      <header>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={pic} className="App-pic" alt="ha" />
      </header> 
     <NavLink to="/Home" className="App-link" variant="dark">log in</NavLink>
      </div>
      <div className="content">
    <Route path="/Home" component={Home} /></div>
    </HashRouter>
  );
}
}

export default App;