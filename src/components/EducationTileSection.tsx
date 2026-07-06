import React from "react";
import Image from "next/image";
import SurfaceCard from "./SurfaceCard";

const EducationTileSection = () => {
  return (
    <SurfaceCard className="pr-4 pt-10 flex flex-row phone:flex-col phone:items-center">
      <div className="p-3 shrink-0">
        <div className="rounded-card overflow-hidden ring-4 ring-light/50 shadow-elevated">
          <Image
            className="rounded-card object-cover"
            width={300}
            height={300}
            src="/UCSantaCruz.jpg"
            alt="UC Santa Cruz campus"
          />
        </div>
      </div>
      <div className="pl-8 w-2/3 phone:w-full phone:pl-0 phone:px-4 flex flex-col">
        <h2 className="section-title">Education</h2>
        <div className="py-8 space-y-2">
          <h3 className="text-ink">University of California, Santa Cruz</h3>
          <p className="text-body">Bachelor of Science, Computer Science</p>
        </div>
      </div>
    </SurfaceCard>
  );
};

export default EducationTileSection;
