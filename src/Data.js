export const MakeData = [
  { x: 65, y: 90 },
  { x: 66, y: 98 },
  { x: 67, y: 103 },
  { x: 68, y: 105 },
  { x: 70, y: 115 },
  { x: 72, y: 120 },
  { x: 74, y: 130 },
  { x: 75, y: 135 },
  { x: 77, y: 140 },
  { x: 79, y: 145 },
  { x: 80, y: 150 },
  { x: 82, y: 155 },
  { x: 85, y: 160 },
  { x: 88, y: 155 },
  { x: 90, y: 150 },
  { x: 92, y: 145 },
  { x: 95, y: 140 },
  { x: 98, y: 135 },
  { x: 100, y: 130 },
  { x: 102, y: 125 },
  { x: 105, y: 120 },
]

const MissData = MakeData.map((lift)=>{
  return {x:lift.x, y:lift.y + 3}
})
export {MissData};

export const MeetData = [
  {
    "name": 'Nate Stemo',
    "meet_name": 'Arnold 2023',
    "meet_date": '3/4/2023',
    "age_category": 'senior',
    "bw": 88.3,
    "sn":{
      "attempt_1": 150,
      "attempt_2": -153,
      "attempt_3": 156,
    },
    "best_sn": 156,
    "cj":{
      "attempt_1": 180,
      "attempt_2": -185,
      "attempt_3": 190,
    },
    "best_cj": 190,
    "total": 346, 
  },
   {
        "name": "Lifter 1",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "masters",
        "bw": 68.5,
        "sn": {
          "attempt_1": 70,
          "attempt_2": -75,
          "attempt_3": 78
        },
        "best_sn": 78,
        "cj": {
          "attempt_1": 105,
          "attempt_2": -110,
          "attempt_3": 115
        },
        "best_cj": 115,
        "total": 193
      },
      {
        "name": "Lifter 2",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "junior",
        "bw": 74.3,
        "sn": {
          "attempt_1": 90,
          "attempt_2": 95,
          "attempt_3": 98
        },
        "best_sn": 98,
        "cj": {
          "attempt_1": 130,
          "attempt_2": -135,
          "attempt_3": 140
        },
        "best_cj": 140,
        "total": 238
      },
      {
        "name": "Lifter 3",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "senior",
        "bw": 85.6,
        "sn": {
          "attempt_1": 120,
          "attempt_2": -123,
          "attempt_3": 125
        },
        "best_sn": 125,
        "cj": {
          "attempt_1": 160,
          "attempt_2": -165,
          "attempt_3": 170
        },
        "best_cj": 170,
        "total": 295
      },
      {
        "name": "Lifter 4",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "masters",
        "bw": 65.2,
        "sn": {
          "attempt_1": 50,
          "attempt_2": -53,
          "attempt_3": 56
        },
        "best_sn": 56,
        "cj": {
          "attempt_1": 80,
          "attempt_2": 85,
          "attempt_3": -90
        },
        "best_cj": 85,
        "total": 141
      },
      {
        "name": "Lifter 5",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "junior",
        "bw": 70.7,
        "sn": {
          "attempt_1": 85,
          "attempt_2": 90,
          "attempt_3": -95
        },
        "best_sn": 90,
        "cj": {
          "attempt_1": 120,
          "attempt_2": -125,
          "attempt_3": 130
        },
        "best_cj": 130,
        "total": 220
      },
      {
        "name": "Lifter 6",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "senior",
        "bw": 82.1,
        "sn": {
          "attempt_1": 110,
          "attempt_2": -115,
          "attempt_3": 118
        },
        "best_sn": 118,
        "cj": {
          "attempt_1": 150,
          "attempt_2": -155,
          "attempt_3": 160
        },
        "best_cj": 160,
        "total": 278
      },
      {
        "name": "Lifter 7",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "masters",
        "bw": 70.2,
        "sn": {
          "attempt_1": 65,
          "attempt_2": -68,
          "attempt_3": 71
        },
        "best_sn": 71,
        "cj": {
          "attempt_1": 95,
          "attempt_2": 100,
          "attempt_3": -105
        },
        "best_cj": 100,
        "total": 171
      },
      {
        "name": "Lifter 8",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "junior",
        "bw": 75.9,
        "sn": {
          "attempt_1": 92,
          "attempt_2": -95,
          "attempt_3": 98
        },
        "best_sn": 98,
        "cj": {
          "attempt_1": 135,
          "attempt_2": -140,
          "attempt_3": 145
        },
        "best_cj": 145,
        "total": 243
      },
      {
        "name": "Lifter 9",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "senior",
        "bw": 87.4,
        "sn": {
          "attempt_1": 130,
          "attempt_2": 135,
          "attempt_3": -140
        },
        "best_sn": 135,
        "cj": {
          "attempt_1": 175,
          "attempt_2": -180,
          "attempt_3": 185
        },
        "best_cj": 185,
        "total": 320
      },
      {
        "name": "Lifter 10",
        "meet_name": "Nationals 2023",
        "meet_date": "5/20/2023",
        "age_category": "masters",
        "bw": 64.1,
        "sn": {
          "attempt_1": 55,
          "attempt_2": -58,
          "attempt_3": 61
        },
        "best_sn": 61,
        "cj": {
          "attempt_1": 85,
          "attempt_2": -90,
          "attempt_3": 95
        },
        "best_cj": 95,
        "total": 156
      },
]

export const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];