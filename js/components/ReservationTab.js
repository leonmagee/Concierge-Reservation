import React from 'react'

class ReservationTab extends React.Component {

    constructor() {

        super()
        this.changeRes = this.changeRes.bind(this)
        this.state = {
            active: 'pending'
        }
    }

    changeRes() {
        this.props.updateTab(this.props.name)
        this.setState({active: this.props.name})
    }

    render() {
        /**
         * this class should pull from state as well
         */
        let class_values = this.props.name + ' small-4 columns';

        return (
            <div onClick={this.changeRes} className={class_values}>
                {this.props.name}
            </div>
        )
    }

}

export default ReservationTab
