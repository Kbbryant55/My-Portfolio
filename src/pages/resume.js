import React from "react";
import styles from "@/styles/Resume.module.scss";
import WorkHistoryTileSection from "../components/WorkHistoryTileSection";
import { workHistory } from "../data/workHistory";

const resume = () => {
  return (
    <main className={styles.main}>
      {workHistory.map((job) => {
        return <WorkHistoryTileSection key={`${job.id}`} job={job} />;
      })}
    </main>
  );
};

export default resume;
