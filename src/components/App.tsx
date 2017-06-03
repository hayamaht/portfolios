import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import WorkList from './WorkList';
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Portfolios</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Web</NavItem>
            <NavItem eventKey={2} href="#">Software</NavItem>
            <NavItem eventKey={3} href="#">Graphics</NavItem>
          </Nav>
        </Navbar>
        <WorkList/>
      </div>
    );
  }
}

export default App;
