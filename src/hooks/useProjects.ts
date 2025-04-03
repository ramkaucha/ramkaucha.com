
import { useState, useEffect } from "react";
import { ProjectList } from "../interfaces";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/data/projects.json');
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: ProjectList = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurredd');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error }
}
