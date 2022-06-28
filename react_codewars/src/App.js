import './App.css';
import React, {useState, useEffect} from 'react'

import LanguagePieChart from './components/codewars/DisplayRanks';
import Welcome from './components/Welcome';

import { fetchCodewars } from './components/api/fetchRequests';

const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
      const fetchData  = async () => {
          const apiData = await fetchCodewars();
          setData(apiData)
      }
      fetchData()
  }, [])

  const renderLanuagePieChart = () => {
    return Object.entries(data).length > 0 ? <LanguagePieChart skills={data.ranks} /> : null
  }

  return (
    <div className="App">
      <Welcome username={data.username} />
      {renderLanuagePieChart()}
    </div>
  )
}

export default App;
