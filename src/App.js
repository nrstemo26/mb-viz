import './App.css';
import ScatterPlot from './components/ScatterPlot';

import {meetData as aofRes } from './data/aof2019' 

import { UserData, MeetData,MissData,MakeData } from './Data'
import { useState } from 'react';

function App() {
  console.log(aofRes[1]['Body Weight (Kg)'])

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [{
  //     label: "Users gained",
  //     data: UserData.map((data) => data.userGain),
  //     backgroundColor: ["red","blue", "green"],
  //     borderColor: ["black"],
  //     borderWidth: 1,
  //   }]
  // })

  const [meetMakeData] = useState({
    datasets:[
      {
      label: 'Make',
      data: [...MakeData],
      backgroundColor: '#ADD8E6',
    },
    {
      label: 'Miss',
      data: [...MissData],
        backgroundColor: '#FF7F50'
    }
  ]})

  const [meetTotalData] = useState({
    datasets:[
      {
      label: 'Total',
      data: aofRes.map((lifter)=>{
      return {x: lifter['Body Weight (Kg)'], y: lifter['Total']}
      }),
      backgroundColor: 'blue',
    },
  ]})


  return (
    <div className="App">
      {/* <div style={{width: "80%"}} >
        <ScatterPlot chartData={meetMakeData} />
      </div> */}
      <div style={{width: "80%"}} >
        <ScatterPlot chartData={meetTotalData} />
      </div>

      {/* <div style={{width: 460}}>
        <BarChart chartData={userData} />
      </div>

      <div style={{width: 460}}>
        <LineChart chartData={userData} />
      </div> */}

    </div>
  );
}

export default App;
