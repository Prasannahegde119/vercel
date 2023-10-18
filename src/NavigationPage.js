// import React from "react";
// // import { Link } from "react-router-dom";

// const NavigationPage = () => {
//   return (
//     <div className="navigation-page">
//       <h2>Welcome to the Navigation Page</h2>
//       <a href="./Form">hwhdjhwdh</a>
//     </div>
//   );
// };

// export default NavigationPage;


// import React from "react";
// import {  Link } from "react-router-dom";
// import './NavigationPage.css';

// const NavigationPage = () => {
//   return (
//     <>
//     <div className="navigation-page">
//       <h2 className="heading">Phonebook App</h2>
//       <div className="links">
//         <Link to="/Sample" className="link">Sample</Link>
//         <Link to="/view" className="link">View</Link>
//       </div>
//     </div>
    
//     </>
//   );
// };

// export default NavigationPage;


import './NavigationPage.css';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#f2f2f2" }}>
        <h2 style={{ margin: 0 }}>Phonebook</h2>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ margin: "0 10px" }}>
            <Link to="/Form" className="link">Add</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="/View" className="link">View</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
