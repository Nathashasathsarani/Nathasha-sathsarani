import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <section className="Container" style={{ padding: "5rem 0", textAlign: "center" }}>
    <h1 className="SectionTitle" style={{ marginBottom: "1rem" }}>
      404 · Page not found
    </h1>
    <p className="AboutBio" style={{ textAlign: "center", marginBottom: "2rem" }}>
      The page you are looking for might have been removed, renamed, or is temporarily unavailable.
      Let&apos;s get you back to the hero section.
    </p>
    <Link className="btn PrimaryBtn btn-shadow" to="/">
      Back to Home
    </Link>
  </section>
);

export default NotFoundPage;

