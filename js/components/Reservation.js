import React from 'react'

class Reservation extends React.Component {

    render() {

        return (
            <div className="reservation-wrapper">
                <div className="name">{this.props.name}</div>
                <div className="date">{this.props.date}</div>
                <button>Redeem</button>
            </div>
        )
    }

}

export default Reservation
