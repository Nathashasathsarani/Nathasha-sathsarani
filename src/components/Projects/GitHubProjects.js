import React from "react";
import styled from "@emotion/styled";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 1.5rem;
`;

const RepoCard = styled.article`
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.25rem;
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h4 {
    font-size: 1.1rem;
    color: var(--color-heading);
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  span {
    font-size: 0.85rem;
    color: var(--color-muted);
  }
`;

const GitHubProjects = ({ username }) => {
  const { repos, loading, error } = useGitHubRepos(username, 3);

  return (
    <div className="BigCard">
      <div className="SectionTitle" style={{ marginBottom: "2rem" }}>
        Live GitHub updates
      </div>
      {loading && <p>Loading repositories...</p>}
      {error && (
        <p role="alert" style={{ color: "#ff6b6b" }}>
          {error}
        </p>
      )}
      {!loading && !error && (
        <RepoGrid>
          {repos.map((repo) => (
            <RepoCard key={repo.id}>
              <h4>{repo.name}</h4>
              <p>{repo.description || "No description provided."}</p>
              <span>
                Updated {new Date(repo.updated_at).toLocaleDateString()} •{" "}
                {repo.language || "Language TBD"}
              </span>
              <a
                className="btn SecondaryBtn btn-shadow"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </RepoCard>
          ))}
        </RepoGrid>
      )}
    </div>
  );
};

export default GitHubProjects;

