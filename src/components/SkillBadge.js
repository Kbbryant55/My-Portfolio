import React from "react";
import Image from "next/image";

const SkillBadge = ({ imageUrl, label, width, height }) => {
  return (
    <div className="flex flex-col w-[10rem] h-[10rem] px-10 text-center text-white align-baseline">
      <Image width={width} height={height} src={`/${imageUrl}`} alt={""} />
      {label}
    </div>
  );
};

export default SkillBadge;
