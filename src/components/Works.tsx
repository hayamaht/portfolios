import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import WorkList from '../containers/WorkList';

import './Works.css';

interface WorksPathMath {
    cat?: string | undefined;
}

const Works = ({ match }: RouteComponentProps<WorksPathMath>) => {
    
    const { cat } = match.params;

    return (
        <CSSTransitionGroup
            transitionName="page"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionEnter={false}
        >
            <div className="works">
                <h1 className="sitename sitename-white">
                    <Link to="/">{'{ hayama }'}</Link>
                </h1>
                <h2>Works</h2>
                <ul className="submenu">
                    <li><Link to="/works">All</Link></li>
                    <li><Link to="/works/cat/web">Web</Link></li>
                    <li><Link to="/works/cat/software">Software</Link></li>
                    <li><Link to="/works/cat/graphics">Graphic</Link></li>
                </ul>
                <div className="content">
                    <WorkList cat={cat} />
                </div>
            </div>
        </CSSTransitionGroup>
    );
};

export default Works;