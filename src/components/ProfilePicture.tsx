import React from "react";
import Image from "next/image";

interface ProfilePictureProps {
  src?: string;
  alt?: string;
  /** Use priority for above-the-fold images (e.g. on home). */
  priority?: boolean;
}

const ProfilePicture = ({
  src = "/profilePic5.jpg",
  alt = "Kenneth Willoughby",
  priority = false,
}: ProfilePictureProps) => {
  return (
    <div className="rounded-3xl overflow-hidden pl-[.75rem] m-5 w-[200px] h-[250px] relative ring-4 ring-light/50 shadow-2xl shrink-0">
      <Image
        fill
        src={src}
        alt={alt}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
};

export default ProfilePicture;
