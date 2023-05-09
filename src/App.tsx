import React, { useState}from 'react';
import './App.css';

import Chart from './Chart/Chart';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar/>
      </div>
      {/* <div>
        <Chart/>
      </div> */}
      
    </div>
  );
}

export default App;
