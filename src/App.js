import "./styles/App.css";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Move from "./components/Move/Move";
import Footer from "./components/Footer/Footer";
import ProfileRegistration from "./components/Header/Profile/ProfileRegistration";
import City from "./components/CityAndSubscription/City/City";
import More from "./components/More/More";

function App() {

  const [tab, setTab] = useState('HowItWorks')

  return (
    <div className="App">
      <Header active={tab} onChange={(current) => {setTab(current)}}/>

      {tab === 'HowItWorks' && <HowItWorks/>}
      {tab === 'Move' && <Move/>}
      {tab === 'Profile' && <ProfileRegistration/>}
      {tab === 'City' && <City/>}
      {tab === 'More' && <More/>}

      <Footer/>

    </div>
  );
}

export default App;
