import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    
)


const BarChart = ({ chartData }:any) => {
    
  return (
    <div style={{width: "400px",height: "400px"}}>
     <Bar data = {chartData} />
    </div>
  )
}

export default BarChart
