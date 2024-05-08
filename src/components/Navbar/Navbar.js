import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact } from "../../portfolio";
import "./Navbar.css";

const Navbar = ({ click, showNavList }) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li
            className="nav__list-item link link--nav"
            onClick={(e) => click(e.target.textContent)}
          >
            Projects
          </li>
        ) : null}

        {skills.length ? (
          <li
            className="nav__list-item link link--nav"
            onClick={(e) => click(e.target.textContent)}
          >
            Skills
          </li>
        ) : null}

        {contact.email ? (
          <li
            className="nav__list-item link link--nav"
            onClick={(e) => click(e.target.textContent)}
          >
            Contact
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btns btn--icon"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? (
          <i className="bi bi-brightness-low-fill"></i>
        ) : (
          <i className="bi bi-moon-fill"></i>
        )}
      </button>

      <button
        type="button"
        onClick={click}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? (
          <i className="bi bi-x"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
