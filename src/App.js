import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';  // each import brings in the components from the js files
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css'; // imports bootstrap components after it's been installed through the console
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';

class App extends Component { // changed from function to class
  render() {
    return (
      <Router> 
        <div className="App">
                  {/* navbar is a bootstrap component which has been imported */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
              {/* these links just display a different component */}
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
