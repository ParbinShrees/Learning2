import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive, and user-friendly websites for businesses and individuals.",
    },
    {
      title: "UI/UX Design",
      description:
        "We create clean and attractive designs that provide a simple and enjoyable user experience.",
    },
    {
      title: "Technical Support",
      description:
        "We provide reliable technical support to help solve common website and technology problems.",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <p className="services-label">WHAT WE OFFER</p>
          <h1>Our Services</h1>
          <p className="services-subtitle">
            Professional solutions designed to help you build, improve, and
            grow your digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-number">
                0{index + 1}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <button>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;