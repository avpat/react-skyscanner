import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';
import Itineraries from '../../containers/Itineraries';
import STYLES from './App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <Itineraries />
    </main>
  </div>
);

export default App;
