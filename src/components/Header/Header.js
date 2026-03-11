import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ onToggleMenu, theme, onToggleTheme }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src="/logo.png" alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="/" end>
            Home
          </NavLink>
          <NavLink className="menu-item" to="/projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="/about">
            About
          </NavLink>
          <NavLink className="menu-item" to="/contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <button
            className="btn SecondaryBtn"
            type="button"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/nathasha-sathsarani-83235a24a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={onToggleMenu} />
      </Nav>
    </div>
  );
};

export default Header;
