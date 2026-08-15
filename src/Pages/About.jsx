function About() {
  return (
    <>
      <style>
        {`
          .about-page {
            min-height: calc(100vh - 70px);
            background: #f8fafc;
            color: #111827;
          }

          .about-hero {
            padding: 100px 20px;
            text-align: center;
            background: #ffffff;
          }

          .about-hero h1 {
            margin: 0 0 20px;
            font-size: 52px;
            font-weight: 800;
            color: #111827;
          }

          .about-hero h1::after {
            content: "";
            display: block;
            width: 60px;
            height: 4px;
            margin: 18px auto 0;
            border-radius: 10px;
            background: #2563eb;
          }

          .about-hero p {
            max-width: 750px;
            margin: 25px auto 0;
            color: #6b7280;
            font-size: 18px;
            line-height: 1.8;
          }

          .about-content {
            max-width: 900px;
            margin: 0 auto;
            padding: 80px 20px;
            text-align: center;
          }

          .about-content h2 {
            margin-bottom: 20px;
            font-size: 34px;
            font-weight: 700;
            color: #111827;
          }

          .about-content p {
            max-width: 700px;
            margin: 0 auto;
            color: #6b7280;
            font-size: 17px;
            line-height: 1.8;
          }

          @media (max-width: 600px) {
            .about-hero {
              padding: 70px 20px;
            }

            .about-hero h1 {
              font-size: 40px;
            }

            .about-hero p {
              font-size: 16px;
            }

            .about-content {
              padding: 60px 20px;
            }

            .about-content h2 {
              font-size: 28px;
            }

            .about-content p {
              font-size: 16px;
            }
          }
        `}
      </style>

      <main className="about-page">

        <section className="about-hero">
          <h1>About Us</h1>

          <p>
            Welcome to our website. We are passionate about creating modern,
            user-friendly, and responsive web applications that provide the
            best experience for our users.
          </p>
        </section>

        <section className="about-content">
          <h2>Our Mission</h2>

          <p>
            Our mission is to build high-quality websites and applications
            while continuously learning and improving our skills in web
            development.
          </p>
        </section>

      </main>
    </>
  );
}

export default About;