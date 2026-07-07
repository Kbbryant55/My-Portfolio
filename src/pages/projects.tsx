import React from "react";
import { projects } from "../data/projects";
import ProjectTile from "../components/ProjectTile";

const Projects = () => {
  return (
    <main className="page-shell">
      <h1 className="w-full max-w-5xl mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            label={project.label}
            imgSrc={project.imgSrc}
            description={project.description}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
