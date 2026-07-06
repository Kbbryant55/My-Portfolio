import React from "react";
import { gitProjects } from "../data/gitProjects";
import ProjectTile from "../components/ProjectTile";

const Projects = () => {
  return (
    <main className="page-shell">
      <h1 className="w-full max-w-5xl mb-10">Projects</h1>
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {gitProjects.map((project) => (
          <ProjectTile
            key={project.id}
            label={project.label}
            imgSrc={project.imgSrc}
            description={project.description}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
