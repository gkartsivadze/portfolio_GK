import React, { useEffect } from "react"

import Navigation from "./components/Navigation"
import Content from "./components/Content"

import { gsap } from "gsap"
import { TimelineMax } from "gsap/gsap-core"

function App() {
  useEffect(() => {
    let tl = new TimelineMax();
    tl.to("#root", 5, { "--x": "15%", "--y": "15%"})
      .to("#root", 5, {"--x": "80%", "--y": "45%"})
      .to("#root", 5, {"--x": "45%", "--y": "90%"})
      .yoyo(true).repeat(-1)
  }, [])
  return (
    <>
      <Navigation />
      <Content />
    </>
  )
}

export default App
