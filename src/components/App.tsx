import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolios from './Portfolios';
import WorkList from '../containers/WorkList';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="header">
                <h1 className="sitename">
                    <Link to="/">{'{ hayama }'}</Link>
                </h1>
                <ul className="menu">
                    <li className="worksLink" ><Link to="/works/all">works</Link></li>
                    <li className="aboutLink" ><Link to="/about">about</Link></li>
                </ul>
            </div>
            
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolios/:filter" component={Portfolios} />
                <Route path="/w" component={WorkList} />
            </Switch>
        </div>
    );
};

export default App;
