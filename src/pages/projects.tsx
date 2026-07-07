import React from "react";
import { projects } from "../data/projects";
import ProjectTile from "../components/ProjectTile";

const Projects = () => {
  return (
    <main className="page-shell">
      <h1 className="w-full max-w-5xl mb-10">Projects</h1>
      <div className="flex flex-row flex-wrap justify-center gap-6">
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
