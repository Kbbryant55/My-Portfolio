import React from "react";

const WorkHistoryTileSection = ({ job }) => {
  return (
    <div className="container my-10 pr-4 flex flex-row phone:flex-col phone:items-center bg-secondary rounded-3xl shadow-3xl">
      <div className=" w-1/3 flex flex-col items-center justify-center text-white border-r-2 border-[#022C3A] phone:border-r-0 phone:border-b-2 pt-10 ">
        <h2 className="text-white text-3xl">{job.companyTitle}</h2>
        <p>{job.location}</p>
      </div>

      <div className="flex flex-col flex-wrap px-10 phone:px-1 pb-10 w-2/3">
        <div className="flex flex-row justify-between w-full text-white py-10">
          <h2 className="text-3xl">{job.positionTitle}</h2>
          <p>{job.duration}</p>
        </div>
        <ul>
          {job.responsibilities.map((task, index) => {
            return (
              <li key={`${index}-${task}`} className="text-white">
                {task}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkHistoryTileSection;
