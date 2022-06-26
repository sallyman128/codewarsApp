import './App.css';
import React, {useState, useEffect} from 'react'

import DisplayRanks from './components/codewars/DisplayRanks';
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

  return (
    <div className="App">
      <Welcome username={data.username} />
      {/* <h1>Hi {data.username}!</h1> */}
      {/* {data ? <DisplayRanks ranks={data.ranks} /> : null} */}
    </div>
  )
}

export default App;
