import React from "react";
import Image from "next/image";

const AboutMeTileSection = () => {
  return (
    <div className="container m-auto pr-4 flex flex-row phone:flex-col phone:items-center bg-secondary rounded-3xl h-4/5">
      <div className="rounded-3xl overflow-hidden pl-[.75rem]">
        <Image
          width={300}
          height={300}
          src={`/Alexis+Kenny_Wedding_135169.jpg`}
          alt={""}
        />
      </div>
      <div className="pl-[2rem] w-3/4 phone:w-full ">
        <h1>About Me</h1>
        <p className="indent-8 text-white pt-10 text-2xl">
          I am an experienced Software Developer who is comfortable working with
          both Front-end and Back-end technologies. Versatile background in
          native app and web development. Excellent reputation for resolving
          problems, improving customer satisfaction, and driving overall
          operational improvements. Consistently saved costs while increasing
          profits through automated solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutMeTileSection;
