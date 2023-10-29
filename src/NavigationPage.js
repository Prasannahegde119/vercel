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
