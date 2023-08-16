import React, { useState } from "react"

import Navigation from "./components/Navigation"
import ContactForm from './components/ContactForm'
import BackgroundComponent from "./components/BackgroundComponent";

import { Outlet } from "react-router-dom";
import Cursor from "./components/Cursor";

import useResize from "./hooks/useResize"

function App() {
  const [contactFormState, setContactFormState] = useState(false)
  const windowWidth = useResize();

  return (
    <>
      <Navigation setContactForm={setContactFormState} />
      <main>
        <Outlet />
        {contactFormState && <ContactForm setContactForm={setContactFormState} />}
        {windowWidth > 600 && <Cursor />}
      </main>
    </>
  )
}

export default App