import React, { useEffect } from "react"

import { gsap } from "gsap"
import { TimelineMax } from "gsap/gsap-core"

function App() {
  useEffect(() => {
    gsap.fromTo(".horizontal_line", 2,{width: "0%"}, {width: "100%"})
  }, [])

  function toProjects() {
    gsap.to("#welcome_section", 0.5, {background: "none"})
    gsap.to("#welcome_section .container", 0.5, {translateZ: "1rem", scale:1.1, opacity: 0, onComplete() {gsap.set("#welcome_section", {display: "none"})}})
    gsap.to("#projects_section .container", 0.5, {scale: 1.1, filter: "none"})

    document.addEventListener("mousemove", handleMovement);
  }

  function handleMovement(e) {
    // gsap.to("projects_section .container", {transform: x})
  }

  return (
    <main>
      <section id="welcome_section">
        <div className="container">
        <div className="hero_wrapper">
          <h1>GIORGI KARTSIVADZE</h1>
          <div className="horizontal_line"></div>
          <p>Front-end Developer</p>
        </div>
        <button onClick={toProjects}>SHOWROOM</button>
        </div>
      </section>
      <section id="projects_section">
        <div className="container">
          <div className="project_card">1</div>
          <div className="project_card">2</div>
          <div className="project_card">3</div>
          <div className="project_card">4</div>
          <div className="main">It's main</div>
          <div className="project_card">5</div>
          <div className="project_card">6</div>
          <div className="project_card">7</div>
          <div className="project_card">8</div>
          <div className="project_card">9</div>
          <div className="project_card">10</div>
          <div className="project_card">11</div>
          <div className="project_card">12</div>
        </div>
      </section>
    </main>
  )
}

export default App
