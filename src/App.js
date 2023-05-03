import './App.css';
import MixedScatter from './components/MixedScatter';
import MixedScatterLift from './components/MixedScatterLift';
import ScatterPlot from './components/ScatterPlot';



// import {meetData as aofRes } from './data/aof2019' 
// import { UserData, MeetData,MissData,MakeData } from './Data'

import { useState } from 'react';

function App() {

  // console.log(aofRes[1]['Body Weight (Kg)'])

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

  // const [meetMakeData] = useState({
  //   datasets:[
  //     {
  //     label: 'Make',
  //     data: [...MakeData],
  //     backgroundColor: '#ADD8E6',
  //   },
  //   {
  //     label: 'Miss',
  //     data: [...MissData],
  //       backgroundColor: '#FF7F50'
  //   }
  // ]})
  // const [meetTotalData] = useState({
  //   datasets:[
  //     {
  //     label: 'Total',
  //     data: aofRes.map((lifter)=>{
  //     return {x: lifter['Body Weight (Kg)'], y: lifter['Total']}
  //     }),
  //     backgroundColor: 'blue',
  //   },
  // ]})

  
const meetSnData = [
  {
      x:'Meet 1',
      y:110,
},
  {
      x:'Meet 1',
      y:115,
},
  {
      x:'Meet 1',
      y:120,
},
  {
      x:'Meet 2',
      y:113,
},
  {
      x:'Meet 2',
      y:118,
},
  {
      x:'Meet 2',
      y:123,
},
  {
      x:'Meet 3',
      y:115,
},
  {
      x:'Meet 3',
      y:120,
},
  {
      x:'Meet 3',
      y:125,
},
  {
      x:'Meet 4',
      y:125,
},
  {
      x:'Meet 4',
      y:130,
},
  {
      x:'Meet 4',
      y:133,
},]
const meetCJData = [
  {
      x:'Meet 1',
      y:135,
},
  {
      x:'Meet 1',
      y:140,
},
  {
      x:'Meet 1',
      y:140,
},
  {
      x:'Meet 2',
      y:133,
},
  {
      x:'Meet 2',
      y:138,
},
  {
      x:'Meet 2',
      y:143,
},
  {
      x:'Meet 3',
      y:140,
},
  {
      x:'Meet 3',
      y:145,
},
  {
      x:'Meet 3',
      y:150,
},
  {
      x:'Meet 4',
      y:144,
},
  {
      x:'Meet 4',
      y:148,
},
  {
      x:'Meet 4',
      y:152,
},]
const bestCJ = [140,143,150,148];
const bestSn = [120,118,125,125];
const totals = [260,261,275,273];

const labels = ['Meet 1', 'Meet 2', 'Meet 3','Meet 4'];

const [lifterMeetData, setLifterMeetData] = useState({
  labels,
  datasets: [
  {
      type: 'line',
      label: 'Best Snatch',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      pointRadius:2,
      hoverRadius:4,
      fill: false,
      data: bestSn,
  },
  {
      type: 'line',
      label: 'Total',
      borderColor: 'green',
      borderWidth: 2,
      pointRadius:2,
      hoverRadius:4,
      fill: false,
      data: totals,
  },
  {
      type: 'line',
      label: 'Best CJ',
      borderColor: '#cc5500',
      borderWidth: 2,
      pointRadius:2,
      hoverRadius:4,
      fill: false,
      data: bestCJ,
  },
  {
      type: 'scatter' ,
      label: 'Snatch attempts',
      backgroundColor: 'rgb(75, 192, 192)',
      // data: labels.map(() => (Math.random() * 200)),
      data: meetSnData,
      pointRadius:2,
      hoverRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
      pointStyle:'triangle',
  },
  {
      type: 'scatter' ,
      label: 'CJ attempts',
      backgroundColor: '#cc5500',
      data: meetCJData,
      pointRadius:2,
      hoverRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
  },
],
})

const handleClick = (lift)=>{
  let lineLabel,lineData, scatterLabel, scatterData;
  let lineDataSet = {
      type: 'line',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      pointRadius: 6,
      hoverRadius: 8,
      fill: false,   
  }
  let scatterDataSet =  {
    type: 'scatter' ,
    backgroundColor: 'rgb(75, 192, 192)',
    pointRadius:6,
    hoverRadius:8,
    borderColor: 'black',
    borderWidth: 1,
    pointStyle:'triangle',
  }

  if(lift === 'snatch'){
    lineLabel = 'best snatch';
    lineData = bestSn;
    scatterLabel = 'snatch attempts';
    scatterData = meetSnData;
  }else if( lift === 'cj'){
    lineLabel = 'best clean and jerk';
    lineData = bestCJ;
    scatterLabel = 'clean and jerk attempts';
    scatterData = meetCJData;
  }

  setLifterMeetData({
    ...lifterMeetData,
    datasets: [
      {...lineDataSet,
      label:lineLabel,
      data: lineData,
      },
      {
        ...scatterDataSet,
        label: scatterLabel,
        data: scatterData,
      },
    ],
  })
}

  return (
    <div className="App">
      {/* <div>
        <MixedScatter/> 
      </div> */}
      
      <div className='lift-container'>
        <button onClick={()=>handleClick('snatch')}>snatch</button>
        <button onClick={()=>handleClick('cj')}>cj</button>
        <button onClick={()=>handleClick('total')}>total</button>
        <MixedScatterLift chartData={lifterMeetData}></MixedScatterLift>
      </div>




      {/* <div style={{width: "80%"}} >
        <ScatterPlot chartData={meetMakeData} />
      </div> */}
      {/* <div style={{width: "80%"}} >
        <ScatterPlot chartData={meetTotalData} />
      </div> */}

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
