import React from "react";
import styles from "@/styles/Home.module.scss";
import { gitProjects } from "../data/gitProjects";
import ProjectTile from "../components/ProjectTile";

const projects = () => {
  return (
    <>
      <main className={styles.main}>
        <div className="flex flex-row flex-wrap	mt-[4rem] h-3/4 justify-center">
          {gitProjects.map((project) => {
            return (
              <ProjectTile
                key={`${project.id}`}
                label={project.label}
                imgSrc={project.imgSrc}
                description={project.description}
                gitUrl={project.gitUrl}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default projects;
