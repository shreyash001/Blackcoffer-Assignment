import React from 'react'
import { useParams } from 'react-router-dom'

const CountryReport = ({currentCountry}:any) => {
  const {id} = useParams()
  // console.log(id)
  return (
    <div>
      country report works
    </div>
  )
}

export default CountryReport
