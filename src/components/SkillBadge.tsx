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
    <div className="flex flex-col w-[10rem] h-[10rem] px-10 text-center text-white align-baseline">
      <Image width={width} height={height} src={`/${imageUrl}`} alt={""} />
      {label}
    </div>
  );
};

export default SkillBadge;
