import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function BarChart({ chartData }) {
  return (
    //takes in an optional options prop
    <Bar data={chartData} >

    </Bar>   
  )
}

export default BarChart

