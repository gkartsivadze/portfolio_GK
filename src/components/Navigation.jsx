import React from "react"

export default function Navigation({ currentPage, selectHandler }) {
    const styling = currentPage != "welcome" ? {
      background: "rgb(0,0,0, 0.5)"
    } :
    {

    }
    return (
        <nav id="navigation" style={styling}>
          {currentPage == "welcome" ? <button onClick={() => selectHandler("projects")}>Projects</button> : <button onClick={() => selectHandler("welcome")}>Welcome</button> }
          <button onClick={(() => selectHandler("welcome"))}>Contact</button>
        </nav>
    )
};
