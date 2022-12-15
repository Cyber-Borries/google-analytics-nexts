//this is an accordion that I am using on my about page

import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "15px",
        border: "1px solid rgba(0,0,0)",
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "center",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        style={{
          display: isShowing ? "flex" : "none",
          padding: "5px",
          flexDirection: "column ",
          justifyContent: "center",
          alignItems: "center",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
