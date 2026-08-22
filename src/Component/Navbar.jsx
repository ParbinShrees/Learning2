import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "#ffffff" : "#dbeafe",
    background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
  });

  return (
    <>
      <style>{`
        .navbar{
          position:sticky;
          top:0;
          z-index:1000;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:16px 32px;
          background:linear-gradient(135deg,#2563eb,#4f46e5);
          box-shadow:0 8px 24px rgba(37,99,235,.25);
        }

        .logo{
          display:flex;
          align-items:center;
          gap:10px;
          margin:0;
          color:#fff;
          font-size:1.5rem;
          font-weight:800;
          letter-spacing:.5px;
        }

        .nav-links{
          display:flex;
          gap:12px;
        }

        .nav-links a{
          text-decoration:none;
          padding:10px 16px;
          border-radius:12px;
          font-weight:600;
          transition:.25s;
        }

        .nav-links a:hover{
          background:rgba(255,255,255,.12);
          color:#fff;
        }

        @media(max-width:640px){
          .navbar{
            flex-direction:column;
            gap:14px;
            padding:18px;
          }

          .nav-links{
            width:100%;
            justify-content:center;
            flex-wrap:wrap;
          }

          .nav-links a{
            flex:1;
            text-align:center;
            min-width:120px;
          }
        }
      `}</style>

      <nav className="navbar">
        <h2 className="logo">📝 TodoTask</h2>

        <div className="nav-links">
          <NavLink to="/" style={activeStyle}>
            Home
          </NavLink>

          <NavLink to="/about" style={activeStyle}>
            About Us
          </NavLink>
        </div>
      </nav>
    </>
  );
}