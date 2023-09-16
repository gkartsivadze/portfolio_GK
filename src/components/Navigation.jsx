import React from "react"
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom"
import { refresh } from "../redux/reducers";

export default function Navigation({ setContactForm }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  function handleClick(e, link) {
    e.preventDefault()
    switch(link) {
      case 0:
        document.getElementById("projects_section")?.classList.add("hide");
        setTimeout(() => {
          navigate("/")
        }, 300)
        break;
      case 1:
        document.getElementById("welcome_section")?.classList.add("hide");
        setTimeout(() => {
          dispatch(refresh())
          navigate("/projects")
        }, 300)
        break;
    }
  }
    return (
        <nav id="navigation">
          <button onClick={(e) => handleClick(e, 0)} to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512" xmlns:v="https://vecta.io/nano"><path fillRule="evenodd" d="M256 64l192 153.6V448H277.333V341.333h-42.667V448H64V217.6L256 64zm0 53.333L106.667 234.667v170.667H192V298.667h128v106.667h85.333V234.667L256 117.333z"/></svg></button>
          <button onClick={(e) => handleClick(e, 1)} to="/projects">PROJECTS</button>
          <button onClick={(() => setContactForm(true))}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="2" strokeMiterlimit="10" xmlns:v="https://vecta.io/nano"><path d="M3 7h26v18H3z"/><path d="M29 7L16 18 3 7"/></svg>
          </button>
        </nav>
    )
};