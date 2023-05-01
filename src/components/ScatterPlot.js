import React from 'react'
import { Scatter } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


function ScatterPlot ({ chartData }){
    const options = {
        scales:{
            x:{
                title:{
                    display:true,
                    text:"Bodyweight(kg)"
                }
            },
            y:{
                title:{
                    display:true,
                    text:"Weight(kg)"
                }
            }
        }
    }
    console.log(options.scales['x'].title.text)
    return (
        <Scatter data={chartData}  options={options}>

        </Scatter>

    )
}

export default ScatterPlot;