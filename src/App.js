import "./styles/App.css";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Move from "./components/Move/Move";

function App() {

  const [tab, setTab] = useState('HowItWorks')

  return (
    <div className="App">
      <Header active={tab} onChange={(current) => {setTab(current)}}/>

      {tab === 'HowItWorks' && <HowItWorks/>}
      {tab === 'Move' && <Move/>}

    </div>
  );
}

export default App;
