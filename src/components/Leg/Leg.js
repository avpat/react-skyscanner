import React from 'react';
import STYLES from './Leg.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Leg = (props) => {
        return <div className={getClassName('Leg')}>leg</div>;
}

export default Leg;