function Home() {
  return (
    <>
      <style>
        {`
          .home {
            min-height: calc(100vh - 70px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            background: #f8fafc;
            text-align: center;
          }

          .home-content {
            max-width: 800px;
          }

          .home-label {
            margin-bottom: 18px;
            color: #2563eb;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .home h1 {
            margin: 0;
            color: #111827;
            font-size: 64px;
            line-height: 1.1;
            font-weight: 800;
          }

          .home h1 span {
            color: #2563eb;
          }

          .home-description {
            margin: 25px auto 35px;
            max-width: 650px;
            color: #6b7280;
            font-size: 18px;
            line-height: 1.7;
          }

          .home-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
          }

          .primary-btn,
          .secondary-btn {
            padding: 13px 26px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
          }

          .primary-btn {
            border: none;
            background: #2563eb;
            color: white;
          }

          .secondary-btn {
            border: 1px solid #d1d5db;
            background: white;
            color: #111827;
          }

          @media (max-width: 600px) {
            .home h1 {
              font-size: 40px;
            }

            .home-buttons {
              flex-direction: column;
            }
          }
        `}
      </style>

      <section className="home">
        <div className="home-content">
          <p className="home-label">WELCOME TO MY WEBSITE</p>

          <h1>
            Build Something
            <span> Amazing.</span>
          </h1>

          <p className="home-description">
            Welcome to my website. Explore our services and discover simple,
            modern, and effective digital solutions.
          </p>

          <div className="home-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;