import React from 'react'
import  { useState, useEffect } from "react";

import './App.css';


const View =()=>{

  const [persons, setPersons] = useState([]);


  useEffect(() => {
    // Fetch the list of persons from the API when the component mounts
    fetch("http://localhost:3000/api/view")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Check the fetched data
        setPersons(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


    return(
        <div>
        <div className="input-group">
          <label htmlFor="yourPhoneNumber" className="stylish-label">
            User Details
          </label>
          </div>

<div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




        </div>


    );


};

export default View;


