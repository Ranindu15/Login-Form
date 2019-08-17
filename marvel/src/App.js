import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component{
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
                   <Link to={'./create'} className="nav-link">New Hero</Link>
                  </li>
                  <li>
                    <Link to={'./index'} className="nav-link">Thor</Link>
                  </li>
               </ul>
             </div>
           </nav> <br/>
           <h2>The End Game</h2><br/>
           <Switch>
             <Route exact path = '/create' component = {Create} />
             <Route exact path = '/edit/:id' component = {Edit} />
             <Route exact path = '/index' component = {Index} />
           </Switch>
         </div>
       </Router>

     );
   }
}


export default App;
