import React, {useState, useEffect} from 'react'

import LanguagePieChart from './components/codewars/LanguagePieChart';
import Welcome from './components/Welcome';

import { fetchCodewars } from './components/api/fetchRequests';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Welcome />
    </div>
  )
}

export default App;
