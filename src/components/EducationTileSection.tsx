import React from "react";
import Image from "next/image";

const EducationTileSection = () => {
  return (
    <div className="container mt-10 pr-4 pt-10 flex flex-row phone:flex-col phone:items-center bg-secondary rounded-3xl h-4/5 shadow-3xl">
      <div className=" p-[.75rem] ">
        <Image
          className="rounded-3xl"
          width={300}
          height={300}
          src={`/UCSantaCruz.jpg`}
          alt={""}
        />
      </div>
      <div className="pl-[2rem] w-2/3 phone:w-full text-white flex flex-col">
        <h1>Education</h1>
        <div className="py-10 text-2xl">
          <h2>University of California, Santa Cruz</h2>
          <h2>Bachelor of Science, Computer Science</h2>
        </div>
      </div>
    </div>
  );
};

export default EducationTileSection;
