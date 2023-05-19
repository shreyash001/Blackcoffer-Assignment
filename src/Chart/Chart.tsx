import React, { useState}from 'react';

import BarChart from './BarChart';
import {userData} from "../Data.js"

const Chart = ({data}:any) => {

  const [Data,setData] = useState({
    labels: userData.map((data):any => data.start_year),
    datasets: [{
      label: 'Intensity Gained',
      data: userData.map((data):any => data.intensity)
    }]
  })
  // console.log(data)
  return (
    <div>
      {/* <BarChart chartData={Data}/> */}
      chart works
    </div>
  )
}

export default Chart
