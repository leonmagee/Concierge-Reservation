import React from 'react'
import Reservation from './Reservation'
import RestaurantTabs from './RestaurantTabs'

class Restaurant extends React.Component {

    constructor() {
        super()
        this.state = {
            name: 'Nippon Sushi',
            reservations: [
                {
                    id: 1,
                    cn: 'Leon Magee',
                    em: 'leonmagee33@gmail.com',
                    res: true,
                    cc: 234233,
                    ptrs: 3,
                    time: '16:00',
                    end: false,
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
                    end: false,
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
                    end: false,
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
                    end: false,
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
                    end: false,
                    date: '9-27-2016'
                }
            ]
        }
    }

    render() {
        let reservation = this.state.reservations.map((reservation) => {
            return (
                <Reservation key={reservation.id} name={reservation.cn} date={reservation.date}/>
            )
        })
        return (
            <div>
                <RestaurantTabs />
                <div>{reservation}</div>
            </div>
        )
    }
}

export default Restaurant
