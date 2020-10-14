import React from 'react';
import User from './User';
import Repo from './Repo';
import Error from './Error';
import GitHubIcon from '@material-ui/icons/GitHub';
import {BrowserRouter as Router, Switch, NavLink,Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import './Style/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav className="nav_bar" variant="tabs" defaultActiveKey="/home">
          <GitHubIcon className="icons"/>
          <div className="option">
            <Nav.Item>
              <NavLink exact activeClassName="active_class" to="/" className="link">Users</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact activeClassName="active_class" to="/repos" className="link">Repositories</NavLink>
            </Nav.Item>
          </div>
        </Nav>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/repos" component={Repo} />
          <Route component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
