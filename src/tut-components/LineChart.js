import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function LineChart({ chartData }) {
  return (
    //takes in an optional options prop
    <Line data={chartData} >

    </Line>   
  )
}

export default LineChart;