import Chart from '../Chart/Chart';
import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import BarChart from '../Chart/BarChart';

const InsideReport = () => {
  
  const { state } = useLocation();
  const [newData, setNewData] = useState();

  // console.log(state.data)
  return (
    <div>
      {/* <Chart data = {state.data.item}/> */}
      <BarChart chartData = {state}/>
    </div>
  )
}

export default InsideReport