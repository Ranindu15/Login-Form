import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Create from './create.hero';
import Edit from './edit.component';
import Index from './index.component';

export default class Navigation extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'./'} className="navbar-brand"> Marvel Universe </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'./'} className="nav-link">Home</Link>
                 </li>
                 <li>
                  <Link to={'./Create'} className="nav-link">New Hero</Link>
                 </li>
                 <li>
                   <Link to={'./Index'} className="nav-link">Thor</Link>
                 </li>
              </ul>
            </div>
          </nav> <br/>
          <h3>The Avengers</h3>
          <Switch>
            <Route exact path= '/create' component = {Create} />
            <Route exact path= '/edit:id' component = {Edit} />
            <Route exact path= '/index' component = {Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}
