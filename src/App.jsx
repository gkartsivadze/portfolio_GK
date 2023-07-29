import React from "react"
// import img1 from "../public/_x32_"

function App() {

  return (
    <main>
      <section id="welcome_section">
        <div className="container">
        <div className="hero_wrapper">
          <h1>GIORGI KARTSIVADZE</h1>
          <div className="horizontal_line"></div>
          <p>Front-end Developer</p>
        </div>
        <div className="skills_wrapper">
          <img src="/html.svg" alt="" />
          <img src="./css.svg" alt="" />
          <img src="./js.svg" alt="" />
          <img src="./react.svg" alt="" />
          <img src="./jquery.svg" alt="" />
          <img src="./scss.svg" alt="" />
          <div className="horizontal_line"></div>
        </div>
        {/* <button>SHOWROOM</button> */}
        </div>
      </section>
    </main>
  )
}

export default App
