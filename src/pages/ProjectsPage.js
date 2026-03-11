import React from "react";
import Projects from "../components/Projects/Projects";

const ProjectsPage = () => (
  <>
    <section className="Container" style={{ padding: "3rem 0 1rem" }}>
      <p className="tagline2" style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.2em" }}>
        Case studies & experiments
      </p>
      <h1 className="SectionTitle" style={{ marginTop: "1rem" }}>
        Work that blends research, analysis, and storytelling
      </h1>
      <p className="AboutBio">
        Each project highlights a different facet of my BA toolkit: mapping processes, testing
        hypotheses with data, auditing UX flows, and collaborating with developers to de-risk builds.
        Scroll through the highlights below or jump into my live GitHub feed for the latest experiments.
      </p>
    </section>
    <Projects />
  </>
);

export default ProjectsPage;

