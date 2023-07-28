import React, { useEffect } from "react"

import { gsap } from "gsap"

import Navigation from "./components/Navigation"
import Content from "./components/Content"
import { TimelineMax } from "gsap/gsap-core"

function App() {
  useEffect(() => {
    let tl = new TimelineMax();
    tl.to("#root", 5, { "--x": CSS.percent(15), "--y": CSS.percent(15)})
      .to("#root", 5, {"--x": CSS.percent(80), "--y": CSS.percent(45)})
      .to("#root", 5, {"--x": CSS.percent(45), "--y": CSS.percent(90)})
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
