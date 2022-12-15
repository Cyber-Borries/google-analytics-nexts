//created a navbar component to be used on all pages

import Script from "next/script";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-container"
        style={{
          width: "100%",
          marginBottom: "15px",
          lineHeight: "15px",
          border: "1px solid rgba(209, 213, 219, 0.5)",
          borderRadius: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="navbar-links-container">
          <ul className="nav-items">
            <li className="navbar-links">
              <a href="./">Home</a>
            </li>
            <li className="navbar-links">
              <a href="./projects">Projects</a>
            </li>
            <li className="navbar-links">
              <a href="./about">About</a>
            </li>
            <li className="navbar-links">
              <a href="./contact">Contact</a>
            </li>
          </ul>

          <style global jsx>
            {`
              nav {
                background-color: var(--Bright_orange);
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-height: 50px;
              }
              .toggle-button {
                display: none;
              }
              .bar {
                width: 100%;
                height: 3px;
                border-radius: 16px;
                background-color: white;
                cursor: pointer;
              }
              .navbar-links-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              }

              .nav-items {
                display: flex;
                justify-content: center;
                align-items: center;
                list-style: none;
              }
              .navbar-links a {
                text-decoration: none;
                color: var(--text_color);
                padding: 15px;
                padding-left: 50px;
                padding-right: 50px;
              }
            `}
          </style>
        </div>
      </nav>
    </>
  );
}
