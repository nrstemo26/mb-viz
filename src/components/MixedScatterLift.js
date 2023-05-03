import React from 'react'
import { Chart, Scatter } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



const MixedScatterLift = ({ chartData }) => {
    return(
        <Chart type='scatter' data={chartData} />
    )
}

export default MixedScatterLift