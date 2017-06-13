import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Works from './Works';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact={true} path="/works" component={Works} />
                <Route path="/works/cat/:cat" component={Works} />
            </Switch>
        </div>
    );
};

export default App;
