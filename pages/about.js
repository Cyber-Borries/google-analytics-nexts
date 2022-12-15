//about page, I imported the Image, navbar and accordion components

import Accordion from "../components/Accordion";
const styles = {
  fontFamily: "Roboto",
};
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <style global jsx>{`
        h1 {
          text-align: center;
        }
        body {
          background-color: rgba(0, 0, 0, 0.2);
        }
        .picture {
          border-radius: 100%;
          margin: 0 auto;
        }
        .image-container {
          display: flex;
          justify-self: center;
        }
      `}</style>
      <div>
        <div className="image-container">
          <Image
            src="/pic.png"
            alt="profile pic"
            width="200"
            height="200"
            className="picture"
          />
        </div>

        <h1>Who is Adriaan?</h1>

        <div style={styles}>
          <Accordion
            title="Education"
            content="<h1>My education</h1>
        <br/>
        <h2>HyperionDev</h2>
        <span>Full stack Web Development Bootcamp</span>
        <span>Completed: 2022</span>
        <br/>
        <h2>TEFL Zorritos</h2>
        <span>On-site TEFL certificate</span>
        <span>Completed: 2017</span>"
          />
          <Accordion
            title="Experience"
            content="
            <h1>My experience</h1>
            <br/>
            <h2>American School Trujillo (Peru)</h2>
            <span>English teacher</span>
            <span>Years worked: 2018 - 2022</span>
            <br/>
            <h2>Puzey Biker's warehouse</h2>
            <span>Parts salesman</span>
            <span>Years worked: 2018 - 2018</span>
            <br/>
            <h2>Supergroup dealerships T/A GM Cresta</h2>
            <span>Evaluator and property maintenance</span>
            <span>Years worked: 2015 - 2018</span>
            <br/>
            <h2>Ipop vehicle sales T/A Suzuki JHB South</h2>
            <span>New car sales executive</span>
            <span>Years worked: 2013 - 2015</span>
            <br/>
          "
          />
        </div>
      </div>
    </div>
  );
}
