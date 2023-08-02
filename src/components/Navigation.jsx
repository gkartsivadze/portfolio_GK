import React from "react"

import { Link } from "react-router-dom"

export default function Navigation({ setContactForm }) {
    return (
        <nav id="navigation">
          <Link to="/">HOME</Link>
          <Link to="/projects">PROJECTS</Link>
          <button onClick={(() => setContactForm(true))}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="2" strokeMiterlimit="10" xmlns:v="https://vecta.io/nano"><path d="M3 7h26v18H3z"/><path d="M29 7L16 18 3 7"/></svg>
          </button>
        </nav>
    )
};
