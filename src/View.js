


import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./App.css";

const View = () => {
  const [persons, setPersons] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = (email) => {
    // Fetch phone number by email
    fetch(`http://localhost:3000/api/phone/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Phone number:", data.email); // Use the fetched phone number
        // Navigate to the edit page with the phone number
        navigate(`/Update/${data.name}`);
      })
      .catch((error) => console.error("Error fetching phone number:", error));
  };
  

  const handleDelete = (email) => {
    fetch(`http://localhost:3000/api/delete?email=${email}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Delete successful", data);
        fetchData(); // Fetch updated data after successful deletion
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
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
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>
                  <label style={{ fontWeight: 'bold', fontSize: '16px' }}>{person.email}</label>
                </td>
                <td>
                  <button onClick={() => handleButtonClick(person.email)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(person.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
