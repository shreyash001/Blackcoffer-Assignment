import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  const [inData, setInData] = useState<any>([]);
  const regionArr:any = []

  useEffect(() => {
    axios
      .get("http://localhost:5000/getInfo")
      .then((response) => {
        setInData(response.data);
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const getRegion = () => {
    inData.map( (item: { region: any; }) => {
      if(!regionArr.includes(item.region)){
        if(item.region !== ""){
          regionArr.push(item.region)
        }
      }
    })
    // console.log(regionArr)
  }
  getRegion();



  return (
    <div className="card-main">
      <div className="cards">
        {
          regionArr.map((item:any,index:any) => (
            <div className="card-body" key={index}>
              <h5 className="card-title">{item}</h5>
              <p className="card-text">This is a sample card.</p>
              {/* <Link to={{pathname: `/region/${index}`,  state: {{data : "aab"}}}} className="btn btn-primary">Learn more</Link> */}
              <Link to={`/region/${index}`} state = {{data: {item,inData}}} className="btn btn-primary">Learn more</Link>

            </div>
          ))
        }
      </div>








      {/* <div className="card">
        <img
          src="https://picsum.photos/200"
          alt="Card image"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a sample card.</p>
          <a href="#" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
