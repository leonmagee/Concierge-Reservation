import React from 'react';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';

class Links extends React.Component {
    render() {
        return (
            <nav className="primary-navigation">
                
                <Link activeStyle={{color: 'orange'}} to="/">Home</Link>
                <Link activeStyle={{color: 'orange'}} to="/reservations">Reservations</Link>
                <Link activeClassName="active" to="/payments">Payments</Link>
            </nav>
        )
    }
}

export default Links;
