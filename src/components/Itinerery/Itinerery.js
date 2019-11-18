import React from 'react';
import Leg from '../Leg/Leg';
import STYLES from './Itinerery.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Itinerary = (props) => {
    console.log("-----Itinerary-----");
    console.log(props);
    console.log("-----EItinerary-----");
    let results = null;
    //as legs has subarray loop through it to get relavant details
    let legs = props.legs.map((legId, i) => {

        results = flights.legs.filter(LegDetails => {
            return LegDetails.id === legId
        }).map(function (LegDetails) {
            //console.log(LegDetails);
            // return <Leg key={legId} departure_airport={LegDetails.departure_airport}>TTR</Leg>;
            return <Leg
                key={legId}
                id={legId}
                departure_airport={LegDetails.departure_airport}
                arrival_airport={LegDetails.arrival_airport}
                departure_time= {String(LegDetails.departure_time).slice(11, 16)}
                arrival_time= {String(LegDetails.arrival_time).slice(11, 16)}
                stops={(LegDetails.stops == 1 )? 'Direct': LegDetails.stops +' stops' }
                airline_name={LegDetails.airline_name}
                airline_id={LegDetails.airline_id}
                duration_mins={LegDetails.duration_mins}
            />
        }).reduce(
            (arr, el) => {
                return arr.concat(el)
            }, []);
        });

        // results.map((LegDetails, j) => {

        //   console.log(legId);
        //   return <Leg
        //     key={legId}
        //     id={legId}
        //     departure_airport={LegDetails.departure_airport}
        //     arrival_airport={LegDetails.arrival_airport}
        //     arrival_time={LegDetails.arrival_time}
        //     stops={LegDetails.stops}
        //     airline_name={LegDetails.airline_name}
        //     airline_id={LegDetails.airline_id}
        //     duration_mins={LegDetails.duration_mins}
        //   />
        // });

            console.log(results);
       return <div className={getClassName('Itinerery')}>
               
           </div>
       ;
}

export default Itinerary;