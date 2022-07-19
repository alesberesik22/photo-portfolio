import React from "react";
import Header from "../../Header/Header";
import Center from "../../tools/Center";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <Center
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "-15rem",
          left: 0,
          textAlign: "justify",
          fontSize: 14,
          zIndex: 1,
          letterSpacing: 0.5,
        }}
      >
        <div className="contact_container">
          <div className="column">
            <h4>Email</h4>
            <h4>Phone</h4>
            <h4>Instagram</h4>
          </div>
          <div className="column">
            <h3>aberesik@gmail.com</h3>
            <h3>0902 424 187</h3>
            <h3>alesberesik</h3>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Contact;
