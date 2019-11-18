import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Itinerery from '../components/Itinerery/Itinerery';
import flights from '../data/flights.json';
import STYLES from '../containers/Itineraries.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
class Itineraries extends Component {
    render() {

      const iternary = flights.itineraries.map((FlightDetails, index)=> {

        return <Itinerery 
                  key={index}
                  id={index}
                  agent={FlightDetails.agent}
                  price={FlightDetails.price}
                  agent_rating={FlightDetails.agent_rating}
                  legs={FlightDetails.legs}
                  />
      });

        return(
          <Aux>
            <div className={getClassName('Itineraries')}>{iternary}</div>
          </Aux>
        );
    }
    
}

export default Itineraries;