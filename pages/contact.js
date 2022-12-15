//basic contact page. I used the image and navbar components

import Navbar from "../components/navbar";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-color: rgba(0, 0, 0, 0.2);
          }
          .contact-imgs {
            margin: 0 auto;
          }
        `}
      </style>
      <Navbar />
      <h2>Click on one of the methods below to contact me</h2>
      <div className="contact-imgs">
        {/* Wrapped the images in an <a> tag to allow the user to click on the images */}
        <a href="https://wa.me/+27718879375">
          <Image
            src="/whatsapp.png"
            alt="profile pic"
            width="50"
            height="50"
            className="whatsapp"
          />
        </a>
        <a href="mailto:adriaan.bornman1@gmail.com">
          <Image
            src="/email.png"
            alt="profile pic"
            width="50"
            height="50"
            className="email"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
