import React from "react"

export default function Navigation({ selectHandler }) {
    return (
        <nav id="navigation">
          <button onClick={() => selectHandler("projects")}>Projects</button>
          <button onClick={(() => selectHandler("welcome"))}>Contact</button>
        </nav>
    )
};
