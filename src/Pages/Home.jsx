import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";


function Home() {

  return (
    <>
      <Navbar />

      <main className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            SMART EDUCATION PLATFORM
          </p>

          <h1>
            Learn, connect,
            <br />
            and grow together.
          </h1>

          <p>
            EduSpace is a simple platform
            designed to connect students,
            teachers and schools in one place.
          </p>

          <div className="hero-actions">

            <Link
              to="/login"
              className="primary-button"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="secondary-button"
            >
              Learn More
            </Link>

          </div>

        </div>

      </main>
    </>
  );
}


export default Home;