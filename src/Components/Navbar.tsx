import React, { useState } from "react";
import { userData } from "../Data.js";

import "./Navbar.css"



const Navbar = () => {
    const [search, setSearch] = useState("");
    const countries = userData.map((item): any => item.country);
  
    const handleCountries = () => {
      for (var i = 0, l = countries.length - 1; i < l; i++) {
        for (var j = 0, L = countries.length - 1; j < L; j++) {
          if (countries[i] === countries[j]) {
            countries.splice(i, 1);
          }
        }
      }
    };
    handleCountries();
  
    const handleSearch =(e: React.SyntheticEvent) => {
      e.preventDefault();
  
    }
  return (
    <div className="navbar">
        <h3>Advance Search filter</h3>
        <div className="search-bar-btn">
        <input
          type="text"
          placeholder="Search here"
          onChange={ (e) => {
            setSearch(e.target.value)
            handleSearch(e)
          }}
        />
        <button type="submit">Submit</button>
        </div>
        
      </div>
  )
}

export default Navbar
