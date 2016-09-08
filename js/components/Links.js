import React from 'react';
//import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';
import {Link} from 'react-router';

class Links extends React.Component {
    render() {
        return (
            <nav className="primary-navigation">
                <div className="small-2 columns">
                    <Link activeClassName="active" to="/">
                        <img src="./assets/img/concierge-reservation-icon.png"/>
                    </Link>
                </div>
                <div className="small-5 columns">
                    <Link activeClassName="active"  to="/reservations">Reservations</Link>
                </div>
                <div className="small-5 columns">
                    <Link activeClassName="active" to="/payments">Payments</Link>
                </div>
                <div style={{clear: 'both'}}></div>
            </nav>
        )
    }
}

export default Links;
