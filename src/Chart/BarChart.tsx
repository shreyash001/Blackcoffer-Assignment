import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

import "./BarChart.css"

ChartJS.register(
    
)


const BarChart = ({ chartData }:any) => {

  const toSearch = chartData.data.item
  const inData = chartData.data.inData

  const casesPerYear: {start_year:number, yearCount:number}[] = []
  
  // const getCases = () => {
  //   inData.map((item:any) => {
  //     if(item.country === toSearch){
  //       if(!casesPerYear.includes(item.start_year)){
  //         if(item.start_year !== ""){
  //           casesPerYear.push({year: item.start_year, yearCount: 1})
  //         }
  //       }
  //       else if(casesPerYear.includes(item.start_year)){
  //         casesPerYear.map((item2:any) => (item2.year === item.start_year ? 0:item2.year += 1))
  //       }
  //     }
  //   })
  // }

  const getCases = () => {
    // console.log(toSearch.toLowerCase())
    let i = 0;
    inData.map((item:any) => {
      if(item.country === chartData.data.item){
        if(!casesPerYear.includes(item.start_year)){
          if(item.start_year !== ""){
            casesPerYear.push({start_year: item.start_year, yearCount: i++})
          }
        }
      }
  })
  }
  getCases()
  console.log(casesPerYear)

  const [data,setData] = useState({
    labels: inData.map((item:any) => item.country.includes(toSearch) && item.country !== "" ? 0: item.start_year ),
    datasets:[{
      label: "Cases per Year",
      data: inData.map((item:any) => item.intensity),
    }]
  })

  // console.log(chartData.data.item)

    
  return (
    <div style={{width: "400px",height: "400px"}}>
      barchart works 
     <Bar data = {data} />
    </div>
    
    // <div className='barchart-main'>
    //   <div className='count'>
    //     <h3>Totoal no of Case: </h3>
    //     {
    //       chartData.data.inData.map( (item:any) => {
    //         <Bar data = {chartData.data.inData} />
    //       })
    //     }
    //   </div>
    // </div>
  )
}

export default BarChart
