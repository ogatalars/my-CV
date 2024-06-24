import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        You can reach me via email at:{" "}
        <a href="mailto:ogataogata@gmail.com">ogataogara@gmail.com</a>
      </p>
      <p>
        You also can reach me via linkedin at:{" "}
        <a href="https://www.linkedin.com/in/felipe-ogata-821791102/">
          Felipe Ogata
        </a>
      </p>
    </div>
  );
};

export default Contact;
