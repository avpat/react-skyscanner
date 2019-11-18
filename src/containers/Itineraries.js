import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Itinerery from '../components/Itinerery/Itinerery';
import flights from '../data/flights.json';
//console.log(flights);

class Itineraries extends Component {
    render() {

      const iternary = flights.itineraries.map((FlightDetails, index)=> {
console.log(index);
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
            <div>{iternary}</div>
          </Aux>
        );
    }
    
}

export default Itineraries;