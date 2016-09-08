import React from 'react';
import Reservations from './Reservations';
//import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import Links from './Links'
import HomePage from './HomePage'


const Payments = () => <div><Links /><h1>Payments</h1></div>


class Wrapper extends React.Component {

    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={HomePage}></Route>
                <Route path="/reservations" component={Reservations}></Route>
                <Route path="/payments" component={Payments}></Route>
            </Router>
        )
    }
}

export default Wrapper;