import "./styles/App.css";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Move from "./components/Move/Move";
import Footer from "./components/Footer/Footer";
import ProfileRegistration from "./components/Header/Profile/ProfileRegistration";

function App() {

  const [tab, setTab] = useState('Move')

  return (
    <div className="App">
      <Header active={tab} onChange={(current) => {setTab(current)}}/>

      {tab === 'HowItWorks' && <HowItWorks/>}
      {tab === 'Move' && <Move/>}
      {tab === 'Profile' && <ProfileRegistration/>}

      <Footer/>

    </div>
  );
}

export default App;
