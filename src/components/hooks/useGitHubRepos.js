import { useEffect, useState } from "react";

const INITIAL_STATE = {
  repos: [],
  loading: true,
  error: "",
};

export const useGitHubRepos = (username, limit = 3) => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchRepos() {
      setState((prev) => ({ ...prev, loading: true, error: "" }));

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to load GitHub repositories right now.");
        }

        const data = await response.json();

        if (isMounted) {
          setState({ repos: data, loading: false, error: "" });
        }
      } catch (error) {
        if (isMounted && error.name !== "AbortError") {
          setState({
            repos: [],
            loading: false,
            error: error.message || "Something went wrong.",
          });
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [username, limit]);

  return state;
};

