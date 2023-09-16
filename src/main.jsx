import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import Projects from './directory/Projects.jsx'
import Welcome from './directory/Welcome.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
)
