import React, { useState } from "react"

import Navigation from "./components/Navigation";
import WelcomeSection from "./components/WelcomeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";

function App() {
  const [selectedPage, setSelectedPage] = useState("welcome");
  const [contactFormState, setContactFormState] = useState(false)
  return (
    <>
      <Navigation setContactForm={setContactFormState} currentPage={selectedPage} selectHandler={setSelectedPage} />
      <main>
        <WelcomeSection currentPage={selectedPage} />
        <ProjectsSection motionActive={selectedPage == "projects"} />
        {contactFormState && <ContactForm setState={setContactFormState} />}
      </main>
    </>
  )
}

export default App
