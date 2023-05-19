import React, { useEffect, useState } from "react";
import "./Report.css";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";

const Report = () => {
  const [inData, setData] = useState<any[]>([]);
  const [newData,setNewData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("http://localhost:5000/getInfo");
      const data = await getData.json();
      setData(data);
    };
    fetchData();
  }, []);


  const getCountry =() => {
    inData.map( (item) => {
      if(!newData.includes(item.country)){
        if(item.country !== ""){
          newData.push(item.country)
        }
        
      }
    })
  }
  getCountry();

  return (
    // <div className="report-main">
    //   <h2>Country Wise Report</h2>
    //   <div className="country-wise-container">
    //     {newData.map((item,index) => (
    //       <div key={index} className="country-name">
    //         <Link to={`/reports/${index}`} state = {{item,inData}}>{item}</Link>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <h1>Short Review Information</h1>
      <Card></Card>
    </div>
  );
};

export default Report;
