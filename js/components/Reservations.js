import React from 'react'
import Reservation from './Reservation'
import ReservationTab from './ReservationTab'
import Links from './Links'
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';

class Reservations extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Nippon Sushi',
            tab: 'pending',
            reservations: [
                {
                    id: 1,
                    cn: 'Leon Magee',
                    em: 'leonmagee33@gmail.com',
                    res: true,
                    cc: 234233,
                    ptrs: 3,
                    time: '16:00',
                    redeem: 'redeemed',
                    date: '9-22-2016'
                },
                {
                    id: 2,
                    cn: 'Mable Jennings',
                    em: 'leonmagee33@gmail.com',
                    res: true,
                    cc: 234233,
                    ptrs: 2,
                    time: '13:00',
                    redeem: 'pending',
                    date: '9-22-2016'
                },
                {
                    id: 3,
                    cn: 'Steven',
                    em: 'steven@gmail.com',
                    res: true,
                    cc: 234233,
                    ptrs: 3,
                    time: '16:00',
                    redeem: 'redeemed',
                    date: '9-21-2016'
                },
                {
                    id: 4,
                    cn: 'Julie Levens',
                    em: 'jl3332@gmail.com',
                    res: true,
                    cc: 234233,
                    ptrs: 3,
                    time: '21:00',
                    redeem: 'pending',
                    date: '9-25-2016'
                },
                {
                    id: 5,
                    cn: 'Nina Avarian',
                    em: 'avar@gmail.com',
                    res: true,
                    cc: 234233,
                    ptrs: 4,
                    time: '16:00',
                    redeem: 'pending',
                    date: '9-27-2016'
                }
            ]
        }

        this.updateTabState = this.updateTabState.bind(this)
        this.updateReservation = this.updateReservation(this)
    }

    updateTabState(tab) {
        this.setState({tab: tab});
    }

    updateReservation(name) {
        //this.setState({tab: null});
        console.log('reservation clicked ' + name);
    }

    render() {
        let reservation = this.state.reservations.map((reservation) => {
            //console.log(reservation);
            if (this.state.tab === reservation.redeem || this.state.tab === 'all') {

                return (
                    <Reservation
                        key={reservation.id}
                        name={reservation.cn}
                        date={reservation.date}
                        redeem={reservation.redeem}
                        updateReservation={this.updateReservation}
                    />
                )
            }

        })
        return (
            <div className="reservations-wrapper">
                <Links />
                <div className="reservation-tabs-wrapper">
                    <div className="row">
                        <ReservationTab updateTab={this.updateTabState} name="pending"/>
                        <ReservationTab updateTab={this.updateTabState} name="redeemed"/>
                        <ReservationTab updateTab={this.updateTabState} name="all"/>
                    </div>
                </div>
                <div>{reservation}</div>
            </div>
        )
    }
}

export default Reservations
