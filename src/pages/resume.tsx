import React from "react";
import WorkHistoryTileSection from "../components/WorkHistoryTileSection";
import { workHistory } from "../data/workHistory";

const resume = () => {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen phone:p-8">
      {workHistory.map((job) => {
        return <WorkHistoryTileSection key={`${job.id}`} job={job} />;
      })}
    </main>
  );
};

export default resume;
