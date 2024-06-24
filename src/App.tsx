import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AcademicHistoric from "./components/AcademicHistoric";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FunFacts from "./components/FunFacts";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Intro
          </Link>
          <Link to="/academic" className="nav-link">
            Academic Historic
          </Link>
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
          <Link to="/experience" className="nav-link">
            Experience
          </Link>
          <Link to="/fun-facts" className="nav-link">
            Curiosities
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/academic" element={<AcademicHistoric />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/fun-facts" element={<FunFacts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
