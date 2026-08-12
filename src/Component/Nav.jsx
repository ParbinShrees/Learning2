import "./Nav.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2 className="logo">My Website</h2>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/services">Services</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
        <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;