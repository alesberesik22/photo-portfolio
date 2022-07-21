import React from "react";
import Header from "../../Header/Header";
import Center from "../../tools/Center";

import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
          top: "2rem",
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
            <h3>filiplulek24@gmail.com</h3>
            <h3>0919 263 850</h3>
            <h3>lek.filip</h3>
          </div>
          <div className="footer_socials">
            <a
              href="https://www.google.com/search?client=safari&hl=sk-sk&cs=0&output=search&q=lek.filip+fotografia+/+videografia&ludocid=11725093773564410090&gsas=1&client=safari&ibp=gwp;0,7&lsig=AB86z5VX0EcLpIFFPwzITjuL5FsN&kgs=d32c8bf1d4bcdbbe&shndl=-1&source=sh/x/kp/local/3&entrypoint=sh/x/kp/local#lpg=cid:CgIgAQ%3D%3D"
              target="_blank"
            >
              <FaGoogle />
            </a>
            <a href="https://www.instagram.com/lek.filip/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+421919263850&text=Ahoj kontaktujem ta ohladom"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Contact;
