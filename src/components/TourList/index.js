import React, {Component} from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import {TourData, tourData} from '../../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    }

    removeTour = (id) => {
       const {tours} = this.state;
       const sortedTours = tours.filter(tour => tour.id !== id)
       this.setState ({
           tours: sortedTours
       })
    }

    render() {

        const {tours} = this.state;
        return (
            <div className="tourList">
                {
                    tours.map(tour => (
                        <Tour key={Tour.id} tour={tour} removeTour={this.removeTour}></Tour>
                    ) )
                }
            </div>
        )
    }
}