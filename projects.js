//project page. I imported the navbar and link components

import Link from "next/link";
import Navbar from "../components/navbar";

export default function projects() {
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <Navbar />
      <h1>Projects</h1>
      <p>
        Feel free to look at the different projects I have worked on. Click on{" "}
        <strong>Github</strong> to see my repositories <br />
        <span className="link">
          <Link href="https://github.com/Cyber-Borries">Github</Link>
        </span>
      </p>
      <style jsx>
        {`
          p {
            color: blue;
            text-align: center;
          }
          .link:hover {
            font-size: 25px;
            transition: smooth;
          }
          body {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <style jsx>
        {`
          .projects-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .project {
            height: 250px;
            aspect-ratio: 1;
            background-color: blue;
            border-radius: 16px;
            box-shadow: 1px 10px 30px;
            margin: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 25px;
            line-height: 1.5;
          }
          link {
            color: white;
          }
          h1 {
            text-align: center;
          }
          span {
            font-size: 14px;
          }
        `}
      </style>
      <h1>
        {" "}
        Here are some of my projects, click on the names to be redirected to the
        deployed app (if available)
      </h1>
      <div className="projects-container">
        <div className="project project-1">
          <Link href="https://github.com/Cyber-Borries/full-stack_iTunes-searchAPI">
            Full stack Itunes search app (not live)
          </Link>
          <br />
          <span className="project-description">
            Full stack (MERN) application interfacing with iTunes search API
          </span>
        </div>
        <div className="project project-2">
          <Link href="https://capstonegamel2.herokuapp.com/">
            Minesweeper Game
          </Link>
          <br />
          <span className="project-description">
            Minesweeper Game built with React.js
          </span>
        </div>
        <div className="project project-3">
          <Link href="https://bejewelled-granita-5ac87f.netlify.app/">
            Rick and Morty eyes following mouse curser
          </Link>
          <br />
          <span className="project-description">
            Testing mouse events with viewport location
          </span>
        </div>
      </div>
    </div>
  );
}
