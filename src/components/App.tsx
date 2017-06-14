import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Works from './Works';

import './App.css';

const redictBlog = (props: RouteComponentProps<{}>) => {
    window.location.assign('https://hayamaht.github.io/blog');
    return <div />;
};

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact={true} path="/works" component={Works} />
                <Route path="/works/cat/:cat" component={Works} />
                <Route path="/blog" render={redictBlog} />
            </Switch>
        </div>
    );
};

export default App;
