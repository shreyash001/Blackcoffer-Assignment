import React, { useEffect, useState}from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Chart from './Chart/Chart';
import Sidebar from './Components/Sidebar';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar';
import { getAllInfo } from './actions';

function App() {



  // const dispatch = useDispatch()

  // useEffect( () => {
  //   dispatch(getAllInfo())
  // },[dispatch])


  return (
    <div className="App">
      <Router>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='main-page'>
          <Navbar></Navbar>
          <AllRoutes/>
        </div>
        
      </Router>
      
      {/* <div>
        <Chart/>
      </div> */}
      
    </div>
  );
}

export default App;
