
import React, { useState } from "react";
import './App.css';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const nameRegex = /^[a-zA-Z]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameRegex.test(name) && phoneRegex.test(email)) {
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

      setNameError('');
      setPhoneError('');
    } else {
      if (!nameRegex.test(name)) {
        setNameError('Please enter a valid name.');
      } else {
        setNameError('');
      }

      if (!phoneRegex.test(email)) {
        setPhoneError('Please enter a 10-digit phone number.');
      } else {
        setPhoneError('');
      }
    }
  };

  return (
    <div className="form-container">
      <header className="header">
        Phonebook App
      </header>
      <br></br>
      <br></br>
      <form className="form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="name">Name:*</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="error-message">{nameError}</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Phone Number:*</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="error-message">{phoneError}</label>
        </div>
        <br></br>

        <button
          type="submit"
          className="btn show-btn"
          onClick={handleSubmit}
        >
          Add
        </button>

      </form>
    </div>
  );
};

export default Form;

