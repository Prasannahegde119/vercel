

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d{10}$/; 
  return phoneRegex.test(phoneNumber);
};

const UpdateDataForm = () => {
  const [newEmail, setNewEmail] = useState('');
  const [error, setError] = useState('');
  const { name } = useParams();

  const handleUpdate = async () => {
    if (!validatePhoneNumber(newEmail)) {
      setError('Invalid phone number format. Please enter a 10-digit number.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/update/${name}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newEmail }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); 
      alert('Data Updated successfully.');

      setError('');
    } catch (error) {
      console.error('Error updating data:', error);
      setError('Error updating data');
    }
  };

  return (
    <div className="form-container">
      <header className="header">Update</header>
      <br />
      <br />
      <form className="form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" value={name} readOnly />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Phone Number:</label>
          <input
            type="text"
            id="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <br />
        <button type="button" className="btn show-btn" onClick={handleUpdate}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateDataForm;
