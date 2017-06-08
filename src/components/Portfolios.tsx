import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
// import WorkList from '../containers/WorkList';

interface PortfoliosPathMath {
    filter: string;
}

const Portfolios = ({ match }: RouteComponentProps<PortfoliosPathMath>) => {
    return (
        <div className="portfolios">
            <h2>Portfolios</h2>
            <ul>
                <li><Link to="/portfolios/all">All</Link></li>
                <li><Link to="/portfolios/web">Web</Link></li>
                <li><Link to="/portfolios/software">Software</Link></li>
                <li><Link to="/portfolios/game">Game</Link></li>
                <li><Link to="/portfolios/graphic">Graphic</Link></li>
            </ul>
            {/*<WorkList />*/}
        </div>
    );
};

export default Portfolios;