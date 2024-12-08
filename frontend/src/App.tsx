import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navigation from "./Navigation.tsx";
import Blog from "./BlogPage.tsx"
import Home from "./HomePage.tsx"
import Project from "./ProjectPage.tsx"
import About from "./AboutPage.tsx"
import Footer from "./Footer.tsx";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper.tsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/project"
          element={
            <PageWrapper>
              <Project />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto md:w-[35%] flex-grow px-4 md:px-0">
          <Navigation />
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router> 
  );
}

export default App

