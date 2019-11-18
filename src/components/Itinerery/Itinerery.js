import React from 'react';
import Leg from '../Leg/Leg';
import STYLES from './Itinerery.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Itinerary = (props) => {
    console.log(props);
        return <div className={getClassName('Results')}>
            <div className={getClassName('Itinerery')}>
                <Leg />
            </div>
        </div>;
}

export default Itinerary;