import React, { useState } from "react";
import Image from "next/image";

interface ProjectTileProps {
  label: string;
  imgSrc: string;
  description: string;
  gitUrl: string;
}

const ProjectTile = ({
  label,
  imgSrc,
  description,
  gitUrl,
}: ProjectTileProps) => {
  return (
    <a
      href={gitUrl}
      className="bg-secondary rounded-xl hover:bg-primary m-10 w-[20rem] shadow-3xl"
    >
      <div className="p-3 flex flex-col justify-center items-center text-white">
        <div className="w-[200px] h-[150px] relative">
          <Image src={`/${imgSrc}`} fill alt={"not available"} />
        </div>

        <h1 className="text-lg pt-6">{label}</h1>
        <div className="pt-4">{description}</div>
      </div>
    </a>
  );
};

export default ProjectTile;
