import React from 'react';
import Leg from '../Leg/Leg';
import STYLES from './Itinerery.scss';
import flights from '../../data/flights.json';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Itinerary = (props) => {

    let results = null;
    //as legs has subarray loop through it to get relavant details
    let legs = props.legs.map((legId, i) => {

        results = flights.legs.filter(LegDetails => {
            return LegDetails.id === legId
        }).map(function (LegDetails) {
            //convert minutes into human readable
            let hours = (LegDetails.duration_mins / 60);
            let rhours = Math.floor(hours);
            let minutes = (hours - rhours) * 60;
            let rminutes = Math.round(minutes);

            return <Leg
                key={legId}
                id={legId}
                departure_airport={LegDetails.departure_airport}
                arrival_airport={LegDetails.arrival_airport}
                departure_time= {String(LegDetails.departure_time).slice(11, 16)}
                arrival_time= {String(LegDetails.arrival_time).slice(11, 16)}
                stops={(LegDetails.stops == 0 )? 'Direct': LegDetails.stops +' stop' }
                stop_class={(LegDetails.stops == 0 )? 'Direct': 'Indirect' }
                airline_name={LegDetails.airline_name}
                airline_id={LegDetails.airline_id}
                duration_mins={rhours +'h '+ rminutes}
            />
        }).reduce(
            (arr, el) => {
                return arr.concat(el)
            }, []);
        });


       return <div className={getClassName('Results')}>
                <div className={getClassName('Itinerery')}>
                    {results}
                    <div className={getClassName('OrderDetails')}>
                        <div className={getClassName('Price')}>{props.price}</div>
                        <div className={getClassName('AgentDetails')}>{props.agent}</div>
                        <button className={getClassName('OrderButton')}>Select</button>
                    </div>
                </div>
                
           </div>
       ;
}

export default Itinerary;