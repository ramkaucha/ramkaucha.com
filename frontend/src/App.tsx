import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation.tsx";
import Blog from "./BlogPage.tsx"
import Home from "./HomePage.tsx"
import Project from "./ProjectPage.tsx"
import About from "./AboutPage.tsx"


function App() {
  return (
    <Router>
      <div className="container mx-auto w-[35%]">
        <Navigation />
        <Routes>
          <Route 
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/project"
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
  );
}

export default App

