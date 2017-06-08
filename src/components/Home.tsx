import * as React from 'react';

import './Home.css';

const Home = () => {
    return (
        <div className="home">
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
    );
};

export default Home;