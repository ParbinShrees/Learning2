import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";


function Navbar() {

  const { user, logout } =
    useAuth();

  const navigate =
    useNavigate();


  function handleLogout() {

    logout();

    navigate("/login");

  }


  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        EduSpace
      </Link>


      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/services">
          Services
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {user && (
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        )}

      </div>


      <div className="nav-user">

        {user ? (

          <>
            <span>
              Hi, {user.firstName}
            </span>

            <button
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </button>
          </>

        ) : (

          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>

        )}

      </div>

    </nav>
  );
}


export default Navbar;