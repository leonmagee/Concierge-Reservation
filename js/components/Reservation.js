import React from 'react'

class Reservation extends React.Component {

    constructor() {

        super()
        this.updateReservation = this.updateReservation.bind(this)
    }

    updateReservation() {

        this.props.updateReservation('lucas')
        console.log('update has been clicked')
    }

    render() {

        let res_class = 'reservation-wrapper ' + this.props.redeem;

        return (
            <div className={res_class}>
                <div className="row">

                    <div className="small-2 columns circle-wrap">
                        <div className="circle"></div>
                    </div>

                    <div className="small-6 columns">

                        <div className="row">
                            <div className="small-12 columns">
                                <div className="name">{this.props.name}</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="small-12 columns">
                                <div className="date">{this.props.date}</div>
                            </div>
                        </div>

                    </div>

                    <div className="small-4 columns">
                        <div className="button-wrap">
                            <a onClick={this.update} href="#" className="cr-redeem">Redeem</a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}

export default Reservation
