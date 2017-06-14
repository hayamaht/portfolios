import * as React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './About.css';

const About = () => {
    return (
        <CSSTransitionGroup
            transitionName="page"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionEnter={false}
        >
            <div className="about">
                <h1 className="sitename sitename-white">
                    <Link to="/">{'{ hayama }'}</Link>
                </h1>
                <h2>About</h2>
                <div className="submenu" />
                <div className="content">
                    <h3>SUNBEAM YEH</h3>
                    <div className="desc">
                        <p>
                            Hi! my name is Sunbeam Yeh, a.k.a "hayama".
                        </p>
                        <p>
                            Since I started to make some web sites, I could do some designs with <b>Photoshop</b>, assemble it with <b>HTML/CSS</b>, fetch data with <b>PHP/NodeJS</b> from Database which I designed some schemas as needed.
                        </p>
                        <p>
                            I fascinate with getting things well organized. I do some architecture/framework-ish work to help me and coworkers to get thing done nicely and quickly.
                        </p>
                    </div>
                    
                    <footer className="footer">
                        <ul className="social">
                            <li className="github">
                                <a href="https://github.com/hayamaht" title="Github">Github</a>
                            </li>
                            <li className="twitter">
                                <a href="https://twitter.com/hayamamkt" title="Twitter">Twitter</a>
                            </li>
                        </ul>
                    </footer>

                </div>
            </div>
        </CSSTransitionGroup>
    );
};

export default About;