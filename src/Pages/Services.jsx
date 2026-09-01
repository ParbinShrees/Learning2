import Navbar from "../components/Navbar";


function Services() {

  const services = [

    {
      title: "Student Management",
      description:
        "Keep student information organized."
    },

    {
      title: "Task Management",
      description:
        "Teachers can create and manage learning tasks."
    },

    {
      title: "Communication",
      description:
        "Make communication between students and teachers easier."
    },

    {
      title: "School Information",
      description:
        "Keep important school information available in one place."
    }

  ];


  return (
    <>
      <Navbar />

      <main className="page">

        <section className="page-header">

          <p className="eyebrow">
            SERVICES
          </p>

          <h1>
            Everything in one place.
          </h1>

        </section>


        <section className="service-grid">

          {services.map(
            (service, index) => (

              <div
                className="service-card"
                key={index}
              >

                <span className="service-number">
                  0{index + 1}
                </span>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>

              </div>

            )
          )}

        </section>

      </main>
    </>
  );
}


export default Services;