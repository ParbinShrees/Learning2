import Navbar from "../components/Navbar";


function About() {

  return (
    <>
      <Navbar />

      <main className="page">

        <section className="page-header">

          <p className="eyebrow">
            ABOUT US
          </p>

          <h1>
            Education made simpler.
          </h1>

          <p>
            EduSpace brings useful education
            tools together in one simple
            platform.
          </p>

        </section>


        <section className="info-grid">

          <div className="info-card">

            <h2>
              Students
            </h2>

            <p>
              Manage tasks, view learning
              information and stay connected
              with teachers.
            </p>

          </div>


          <div className="info-card">

            <h2>
              Teachers
            </h2>

            <p>
              Share tasks, communicate with
              students and manage classroom
              activities.
            </p>

          </div>


          <div className="info-card">

            <h2>
              Schools
            </h2>

            <p>
              Organize school information
              and improve communication.
            </p>

          </div>

        </section>

      </main>
    </>
  );
}


export default About;