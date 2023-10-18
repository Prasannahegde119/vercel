
import React, { useState, useEffect } from "react";
import './App.css';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email };

    try {
      const response = await fetch("http://localhost:3000/api/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data saved successfully.");
        setName("");
        setEmail("");
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

//   const handleShowNames = () => {
//     // Convert the array of objects into a formatted string
//     const formattedData = persons.map((person) => `Name: ${person.name}, Email: ${person.email}`).join("\n");
//     setFormattedData(formattedData);
//   };
  

  return (
    <div className="form-container">
      <header className="header">
        Phonebook App
      </header>
      <form className="form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Phone Number:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn show-btn"
          onClick={handleSubmit}
        >
          Add
        </button>
        {/* <button
          type="submit"
          className="btn show-btn"
          onClick={handleShowNames}
        >
          Show
        </button> */}
        <div className="input-group">
          <label htmlFor="yourPhoneNumber" className="stylish-label">
            User Details
          </label>
          {/* <textarea
  readOnly
  id="yourPhoneNumber"
  name="yourPhoneNumber"
  className="text-area"
  placeholder="Names will appear here."
  rows="4"
  value={
    persons.length > 0
      ? persons.map((person) => `${person.name}`).join("\n")
      : "No data available"
  }
></textarea> */}

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
      </form>
    </div>
  );
};

export default Form;

