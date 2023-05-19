import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Report from './Pages/Report'
import CountryReport from './Pages/CountryReport'
import InsideReport from './Pages/InsideReport'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/reports" element={<Report/>}/>
        <Route path = "/reports/:id" element= {<CountryReport/>}/>
        <Route path = "/region/:id" element= {<InsideReport/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
