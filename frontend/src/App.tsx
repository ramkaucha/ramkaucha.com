import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react'
import Navigation from "./Navigation.tsx";
import Blog from "./BlogPage.tsx"
import Home from "./HomePage.tsx"
import Project from "./ProjectPage.tsx"
import About from "./AboutPage.tsx"


function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route 
              path="/"
             element={
                <Home />
              }
            />
            <Route
              path="/projects"
              element={
                <Project />
              }
            />
            <Route
             path="/about"
              element={
                <About />
              }
            />
            <Route
              path="/blog"
              element={
                <Blog />
              }
            />
          </Routes>
        </div>
      </Router> 
    </>
    
  )
}

export default App
