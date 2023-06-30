import React, {useState, useEffect} from 'react'

import LanguagePieChart from './components/codewars/LanguagePieChart';
import Welcome from './components/Welcome';

import { fetchCodewars } from './components/api/fetchRequests';
import NavBar from './components/NavBar';

const App = () => {

  const [data, setData] = useState({});

  // useEffect(() => {
  //     const fetchData  = async () => {
  //         const username = "sallyman128";
  //         const apiData = await fetchCodewars(username);
  //         setData(apiData)
  //     }
  //     fetchData()
  //     try {
  //       setInterval(fetchData(), 4000);
  //     } catch (e) {
  //       console.log(e);
  //     }
  // }, [])

  // const renderLanuagePieChart = () => {
  //   return Object.entries(data).length > 0 ? <LanguagePieChart skills={data.ranks} /> : null
  // }

  return (
    <div className="App">
      <NavBar />
      <Welcome />
      {/* {renderLanuagePieChart()} */}
    </div>
  )
}

export default App;
