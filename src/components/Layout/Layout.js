import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dropdown from "../Dropdown/Dropdown";
import ScrollToTop from "../SocialIcon/ScrollToTop";
import FixSocialIcon from "../SocialIcon/FixSocialIcon";
import "../../styles/layout.css";

const Layout = ({ children, theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        onToggleMenu={toggleMenu}
      />
      <Dropdown isOpen={isMenuOpen} toggle={closeMenu} />
      <div className="PageContent">{children}</div>
      <Footer />
      <FixSocialIcon />
      <ScrollToTop />
    </>
  );
};

export default Layout;

