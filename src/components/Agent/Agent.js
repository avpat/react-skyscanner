import React from 'react';
import STYLES from './Agent.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Agent = (props) => {
        return <div className={getClassName('Agent')} />;
}

export default Agent;