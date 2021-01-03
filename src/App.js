import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Home } from "./components/home";// each import brings in the components from the js files
import { Footer } from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";   // imports bootstrap components after it's been installed through the console
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Add } from "./components/add";
import { List } from "./components/list";
import { Alter } from "./components/alter";

class App extends Component {   // changed from function to class
  render() {
    return (
      <Router>
        <div className="App">
          {/* navbar is a bootstrap component which has been imported */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Music</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/list">Albums</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            {/* these links just display a different component */}
            <Route path="/" component={Home} exact />
            <Route path="/add" component={Add} />
            <Route path="/list" component={List} />
            <Route path="/alter/:id" component={Alter} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
