import './NavigationPage.css';
import { useLocation } from 'react-router-dom';

import { Outlet, Link } from "react-router-dom";
import kohliImage from './Kohlimage.jpg';

const Layout = () => {

  const location=useLocation();
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
      
      {location.pathname === '/' && (
        <div>
          <img src={kohliImage} alt="kohli" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
 
        </>
  );
};

export default Layout;
