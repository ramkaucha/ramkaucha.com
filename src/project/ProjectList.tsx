import { useState } from "react";
import { useProjects } from "../hooks/useProjects";
import ProjectCell from "./ProjectCell";

interface ProjectListProps {
  max?: number;
}

export default function ProjectList({ max }: ProjectListProps) {
  const { projects, loading, error } = useProjects()
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        No projects found.
      </div>
    )
  }

  const displayProjects = max ? projects.slice(0, max) : projects;

  return (
    <div>
      <p className="text-[2em] font-bold mb-3">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className={`transition-all duration-300 ${hoveredId && hoveredId !== project.id ? "blur-sm scale-98" : ""
              }`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <ProjectCell key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
