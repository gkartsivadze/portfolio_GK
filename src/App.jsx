import React, { useState } from "react"

import Navigation from "./components/Navigation";
import WelcomeSection from "./components/WelcomeSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  const [selectedPage, setSelectedPage] = useState("welcome");
  return (
    <>
      <Navigation currentPage={selectedPage} selectHandler={setSelectedPage} />
      <main>
        <WelcomeSection currentPage={selectedPage} />
        <ProjectsSection motionActive={selectedPage == "projects"} />
      </main>
    </>
  )
}

export default App
