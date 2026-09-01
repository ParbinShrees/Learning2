import Navbar from "../components/Navbar";


function Contact() {

  function handleSubmit(event) {

    event.preventDefault();

    alert(
      "Message submitted successfully!"
    );

    event.target.reset();

  }


  return (
    <>
      <Navbar />

      <main className="page">

        <section className="page-header">

          <p className="eyebrow">
            CONTACT
          </p>

          <h1>
            Get in touch.
          </h1>

        </section>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label>
            Name

            <input
              type="text"
              placeholder="Your name"
              required
            />

          </label>


          <label>
            Email

            <input
              type="email"
              placeholder="you@example.com"
              required
            />

          </label>


          <label>
            Message

            <textarea
              placeholder="Write your message..."
              rows="6"
              required
            />

          </label>


          <button
            type="submit"
            className="primary-button"
          >
            Send Message
          </button>

        </form>

      </main>
    </>
  );
}


export default Contact;