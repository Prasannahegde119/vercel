import React from 'react';
// import phonebookLogo from './phonebook-logo.png';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          
          <h1>Phonebook</h1>
        </div>
        <div className="navbar-items">
          <ul>
            <li><a href="#">Add</a></li>
            <li><a href="#">List</a></li>
          </ul>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>
      
    </div>
  );
};

export default App;
