import { useContext, useRef, useState } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectDescription from "./components/ProjectsDescription/ProjectDescription";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);
  const top = useRef(null);

  const toggleNavList = (sectionId) => {
    setShowNavList(!showNavList);

    if (sectionId === "Projects") {
      projects.current.scrollIntoView();
    }

    if (sectionId === "Skills") {
      skills.current.scrollIntoView();
    }

    if (sectionId === "Contact") {
      contact.current.scrollIntoView();
    }
  };

  const scrollTop = () => {
    top.current.scrollIntoView();
  };

  return (
    <div id="top" className={`${themeName} app`}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  click={toggleNavList}
                  showNavList={showNavList}
                  refProp={top}
                />

                <main>
                  <About />
                  <Projects refProp={projects} />
                  <Skills refProp={skills} />
                  <Contact refProp={contact} />
                </main>

                <ScrollToTop click={scrollTop} />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDescription />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
