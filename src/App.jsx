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
        {selectedPage == "welcome" && <WelcomeSection />}
        {selectedPage != "welcome" && <ProjectsSection />}
      </main>
    </>
  )
}

export default App
