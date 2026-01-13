import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={
        scrolled
          ? {
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            background: theme === 'dark' ? "rgba(13, 17, 23, 0.95)" : "rgba(255, 255, 255, 0.95)",
          }
          : {
            boxShadow: "none",
            background: theme === 'dark' ? "rgba(22, 27, 34, 0.7)" : "rgba(255, 255, 255, 0.7)"
          }
      }
    >
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>
          <span className="logo-main">Zunair</span>
          <span className="logo-tag">DEV</span>
        </a>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem'
              }}
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
