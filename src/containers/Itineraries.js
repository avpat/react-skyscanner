import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Itinerery from '../components/Itinerery/Itinerery';


class Itineraries extends Component {
    render() {
        return <Aux>

            <Itinerery />
            </Aux>;
    }
}

export default Itineraries;