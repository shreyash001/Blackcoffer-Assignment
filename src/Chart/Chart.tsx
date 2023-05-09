import React, { useState}from 'react';

import BarChart from './BarChart';
import {userData} from "../Data.js"

const Chart = () => {

  const [Data,setData] = useState({
    labels: userData.map((data):any => data.start_year),
    datasets: [{
      label: 'Intensity Gained',
      data: userData.map((data):any => data.intensity)
    }]
  })

  return (
    <div>
      <BarChart chartData={Data}/>
    </div>
  )
}

export default Chart
