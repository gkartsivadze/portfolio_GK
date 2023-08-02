import React, { useState } from "react"

import Navigation from "./components/Navigation"
import ContactForm from './components/ContactForm'

import { Outlet } from "react-router-dom";

function App() {
  const [contactFormState, setContactFormState] = useState(false)
  return (
    <>
      <Navigation setContactForm={setContactFormState} />
      <main>
        <Outlet />
        {contactFormState && <ContactForm setContactForm={setContactFormState} />}
      </main>
    </>
  )
}

export default App