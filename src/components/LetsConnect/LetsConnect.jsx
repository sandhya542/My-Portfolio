import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./LetsConnect.module.css";

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // e.g., 'service_xxx'
        "YOUR_TEMPLATE_ID", // e.g., 'template_yyy'
        formData,
        "YOUR_PUBLIC_KEY" // e.g., 'user_zzz'
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.title}>LET’S CONNECT</div>
      <div className={styles.subtitle}>
        I’d love to hear from you — whether it’s about opportunities,
        collaborations, or just to say hi!
      </div>

      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/sandhya-rani-katta/" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://github.com/sandhya542" target="_blank" rel="noopener noreferrer">
          GitHub ⌘
        </a>
        <a href="/Sandhya_Katta_Resume.pdf" download>
          Download Resume ⬇
        </a>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>

      {status && <div className={styles.status}>{status}</div>}
    </section>
  );
};

export default LetsConnect;
