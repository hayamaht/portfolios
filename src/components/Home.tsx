import * as React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './Home.css';

const Home = () => {
    return (
        <CSSTransitionGroup
            transitionName="page"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionEnter={false}
        >
            <div className="home">
                <div className="header">
                    <h1 className="sitename sitename-green">
                        <Link to="/">{'{ hayama }'}</Link>
                    </h1>
                    <ul className="menu">
                        <li className="worksLink" ><Link to="/works">works</Link></li>
                        <li className="aboutLink" ><Link to="/about">about</Link></li>
                    </ul>
                </div>
                <h2>hayama</h2>
                <div className="title">Web Developer / Programmer</div>
                <ul className="skills">
                    <li className="html">HTML</li>
                    <li className="css">CSS</li>
                    <li className="js">JavaScript</li>
                    <li className="nodejs">NodeJS</li>
                    <li className="swift">Swift</li>
                    <li className="photoshop">Photoshop</li>
                    <li className="illustrator">Illustrator</li>
                </ul>
                <div className="misc">
                    <div>I'm also a gamer.</div>
                    <ul>
                        <li className="playstation">PlayStation</li>
                        <li className="steam">Steam</li>
                    </ul>
                </div>
            </div>
        </CSSTransitionGroup>
    );
};

export default Home;