import React, { useState } from "react";
import Image from "next/image";

const ProjectTile = ({ label, imgSrc, description, gitUrl }) => {
  return (
    <a
      href={gitUrl}
      className="bg-secondary rounded-xl shadow-2xl hover:bg-primary m-10 w-[20rem] "
    >
      <div className="p-3 flex flex-col justify-center items-center text-white">
        <Image
          src={`/${imgSrc}`}
          width={250}
          height={250}
          alt={"not available"}
        />
        <h1 className="text-lg">{label}</h1>
        <div className="pt-4">{description}</div>
      </div>
    </a>
  );
};

export default ProjectTile;