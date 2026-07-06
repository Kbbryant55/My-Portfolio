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
    <div className="flex flex-col items-center justify-center w-[8.5rem] min-h-[8.5rem] p-4 text-center text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-default rounded-lg hover:bg-surface-input">
      <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:scale-110">
        <Image
          width={width}
          height={height}
          src={`/${imageUrl}`}
          alt={label}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="mt-2 text-sm leading-tight">{label}</span>
    </div>
  );
};

export default SkillBadge;
