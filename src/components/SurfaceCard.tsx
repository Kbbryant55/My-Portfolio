import React from "react";

interface SurfaceCardProps {
  children: React.ReactNode;
  className?: string;
}

/** Warm craft elevated card — use for About, Education, Skills, Resume tiles. */
const SurfaceCard = ({ children, className = "" }: SurfaceCardProps) => {
  return (
    <div className={`surface-card container ${className}`.trim()}>
      {children}
    </div>
  );
};

export default SurfaceCard;
