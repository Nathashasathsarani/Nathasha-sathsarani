import React from "react";
import "./styles/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useTheme } from "./components/hooks/useTheme";

const AppRoutes = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <div className="RouteTransition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Layout>
  );
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <AppRoutes theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}

export default App;
