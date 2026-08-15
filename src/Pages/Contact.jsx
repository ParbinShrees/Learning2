function Contact() {
  return (
    <>
      <style>
        {`
          .contact {
            min-height: calc(100vh - 70px);
            padding: 80px 20px;
            background: #f8fafc;
          }

          .contact-container {
            max-width: 1000px;
            margin: 0 auto;
          }

          .contact-header {
            text-align: center;
            margin-bottom: 50px;
          }

          .contact-header h1 {
            margin-bottom: 15px;
            color: #111827;
            font-size: 48px;
            font-weight: 800;
          }

          .contact-header p {
            color: #6b7280;
            font-size: 17px;
          }

          .contact-content {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 30px;
          }

          .contact-info,
          .contact-form {
            padding: 30px;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          }

          .contact-info h2 {
            margin-bottom: 20px;
            color: #111827;
          }

          .contact-info p {
            margin: 15px 0;
            color: #6b7280;
            line-height: 1.6;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 13px;
            box-sizing: border-box;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 15px;
            outline: none;
          }

          .contact-form input:focus,
          .contact-form textarea:focus {
            border-color: #2563eb;
          }

          .contact-form textarea {
            min-height: 140px;
            resize: vertical;
          }

          .contact-form button {
            padding: 13px;
            border: none;
            border-radius: 8px;
            background: #2563eb;
            color: white;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
          }

          .contact-form button:hover {
            background: #1d4ed8;
          }

          @media (max-width: 700px) {
            .contact {
              padding: 60px 20px;
            }

            .contact-header h1 {
              font-size: 38px;
            }

            .contact-content {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <section className="contact">
        <div className="contact-container">

          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>Have a question? We'd love to hear from you.</p>
          </div>

          <div className="contact-content">

            <div className="contact-info">
              <h2>Get in Touch</h2>

              <p>
                We'd love to hear from you. Send us a message and
                we'll get back to you as soon as possible.
              </p>

              <p>Email: example@email.com</p>
              <p>Phone: +977 9800000000</p>
              <p>Location: Kathmandu, Nepal</p>
            </div>

            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;