import React from "react"

export default function Navigation({ currentPage, selectHandler, setContactForm }) {
    const styling = currentPage != "welcome" ? {
      background: "rgb(0,0,0, 0.5)"
    } :
    {

    }
    return (
        <nav id="navigation" style={styling}>
          {currentPage == "welcome" ? <button onClick={() => selectHandler("projects")}>Projects</button> : <button onClick={() => selectHandler("welcome")}>Back</button> }
          <button onClick={(() => setContactForm(true))}>Contact</button>
        </nav>
    )
};
