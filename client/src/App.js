//----- css  ----

import './css/body.css';
import './css/header.css';
import './css/card1.css'
import './css/card2.css'
import './css/card3.css'
import './css/PrimeAds.css';
import './css/ProductCard.css';
//----- css  ----

import React from 'react';
import Header from './components/header';
import Body from './components/body';


const App = () => {
  return (
    <div className="App" >
      <Header />
      <Body />
    </div>
  );
}

export default App;
