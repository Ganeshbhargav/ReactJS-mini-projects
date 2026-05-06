import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contactMe">
      <h2 className="contact-heading">Contact Me</h2>

      <p className="contact-subtitle">
        Have a project in mind or want to connect? Let’s talk.
      </p>

      <div className="contact-container">
        
            {/* Left Info */}
            <div className="contact-info">
            <p><strong>Email:</strong> ganeshbhargav@email.com</p>
            <p><strong>Phone:</strong> +91 8096812789 </p>
            <p><strong>Location:</strong> India</p>
            </div>

            {/* Right Form */}
            
            <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
            </form>

      </div>
    </section>
  );
};

export default Contact;