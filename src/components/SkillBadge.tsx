import React from "react";
import Image from "next/image";

interface SkillBadgeProps {
  imageUrl: string;
  label: string;
  width: number;
  height: number;
}

const SkillBadge = ({ imageUrl, label, width, height }: SkillBadgeProps) => {
  return (
    <div className="flex flex-col w-[10rem] h-[10rem] px-10 text-center text-white align-baseline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default rounded-lg">
      <div className="transition-transform duration-300 hover:scale-110">
        <Image width={width} height={height} src={`/${imageUrl}`} alt={label} />
      </div>
      <span className="mt-2">{label}</span>
    </div>
  );
};

export default SkillBadge;
