import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import GitHubProjects from "./GitHubProjects";

function Projects({ limit, showGitHub = true }) {
  return (
    <section className="ProjectWrapper" id="projects">
      <div className="Container">
        <div className="SectionTitle">Projects</div>
        <ProjectCard limit={limit} />
        {showGitHub && <GitHubProjects username="nathashasathsarani" />}
      </div>
    </section>
  );
}

export default Projects;
