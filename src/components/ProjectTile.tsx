import React from "react";
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
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[20rem] rounded-card bg-surface-card shadow-card hover:bg-surface-card-hover hover:shadow-elevated hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-line"
    >
      <div className="p-4 flex flex-col justify-center items-center text-ink">
        <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden bg-dark/20">
          <Image src={`/${imgSrc}`} fill alt={label} className="object-cover" />
        </div>
        <h2 className="text-xl font-semibold pt-4 text-center text-ink">{label}</h2>
        <p className="pt-3 text-sm text-ink-muted text-center leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectTile;
