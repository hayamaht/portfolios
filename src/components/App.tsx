import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import WorkList from '../containers/WorkList';

interface AppProps {
    onFetch?: (cat?: string) => void;
}

const App = ({ onFetch }: AppProps) => {
    return (
        <div className="App">
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#" onClick={() => onFetch!()}>Portfolios</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem eventKey={1} onClick={() => onFetch!('Web')}>Web</NavItem>
                <NavItem eventKey={2} onClick={() => onFetch!('Software')}>Software</NavItem>
                <NavItem eventKey={3} onClick={() => onFetch!('Graphics')}>Graphics</NavItem>
                </Nav>
            </Navbar>
            <WorkList />
        </div>
    );
};

export default App;
