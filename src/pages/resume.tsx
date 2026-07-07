import React from "react";
import WorkHistoryTileSection from "../components/WorkHistoryTileSection";
import { workHistory } from "../data/workHistory";

const Resume = () => {
  return (
    <main className="page-shell space-y-4">
      <div className="w-full max-w-5xl flex items-center justify-between gap-4 flex-wrap">
        <h1>Resume</h1>
        <a
          href="/Kenneth-Willoughby-Resume.pdf"
          download
          className="btn-primary"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
          Download Resume
        </a>
      </div>
      {workHistory.map((job) => (
        <WorkHistoryTileSection key={job.id} job={job} />
      ))}
    </main>
  );
};

export default Resume;
