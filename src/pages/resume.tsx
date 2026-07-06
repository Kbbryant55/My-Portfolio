import React from "react";
import WorkHistoryTileSection from "../components/WorkHistoryTileSection";
import { workHistory } from "../data/workHistory";

const Resume = () => {
  return (
    <main className="page-shell space-y-4">
      <h1 className="w-full max-w-5xl">Resume</h1>
      {workHistory.map((job) => (
        <WorkHistoryTileSection key={job.id} job={job} />
      ))}
    </main>
  );
};

export default Resume;
