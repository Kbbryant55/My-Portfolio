import React from "react";
import SurfaceCard from "./SurfaceCard";

interface Job {
  companyTitle: string;
  location: string;
  positionTitle: string;
  duration: string;
  responsibilities: string[];
}

interface WorkHistoryTileSectionProps {
  job: Job;
}

const WorkHistoryTileSection = ({ job }: WorkHistoryTileSectionProps) => {
  return (
    <SurfaceCard className="my-10 pr-4 flex flex-row phone:flex-col phone:items-center transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-elevated">
      <div className="w-1/3 flex flex-col items-center justify-center text-ink border-r-2 border-line-strong phone:border-r-0 phone:border-b-2 pt-10 pb-6 phone:pb-10">
        <h2 className="text-center">{job.companyTitle}</h2>
        <p className="text-meta mt-2">{job.location}</p>
      </div>

      <div className="flex flex-col flex-wrap px-10 phone:px-6 pb-10 w-2/3 phone:w-full">
        <div className="flex flex-row phone:flex-col phone:gap-2 justify-between w-full py-8">
          <h3>{job.positionTitle}</h3>
          <p className="text-meta shrink-0">{job.duration}</p>
        </div>
        <ul className="space-y-2 pl-5">
          {job.responsibilities.map((task, index) => (
            <li key={`${index}-${task}`} className="text-body text-base">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </SurfaceCard>
  );
};

export default WorkHistoryTileSection;
