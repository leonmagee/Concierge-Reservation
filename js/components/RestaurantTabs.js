import React from 'react'

class RestaurantTabs extends React.Component {

    render() {

        return (
            <div className="restaurant-tabs-wrapper">
                <div className="row">
                    <div className="small-4 columns pending">
                        Pending
                    </div>
                    <div className="small-4 columns redeemed">
                        Redeemed
                    </div>
                    <div className="small-4 columns all">
                        All
                    </div>
                </div>
            </div>
        )
    }

}

export default RestaurantTabs
