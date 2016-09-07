import React from 'react';
import Reservations from './Reservations';
//import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';
import Links from './Links'

const Home = () => <div><Links /><h1>Home</h1></div>
const Payments = () => <div><Links /><h1>Payments</h1></div>




class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Router history={ hashHistory }>
                    <Route path="/" component={Home}></Route>
                    <Route path="/reservations" component={Reservations}></Route>
                    <Route path="/payments" component={Payments}></Route>
                </Router>
            </div>

        )
    }
}

export default Wrapper;