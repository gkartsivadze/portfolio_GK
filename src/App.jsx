import React, { useState } from "react"

import Navigation from "./components/Navigation"
import ContactForm from './components/ContactForm'

import { Outlet } from "react-router-dom";
import Cursor from "./components/cursor";

function App() {
  const [contactFormState, setContactFormState] = useState(false)
  return (
    <>
      <Navigation setContactForm={setContactFormState} />
      <main>
        <Outlet />
        {contactFormState && <ContactForm setContactForm={setContactFormState} />}
        <Cursor />
      </main>
    </>
  )
}

export default App