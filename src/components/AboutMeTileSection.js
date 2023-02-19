import React from "react";
import Image from "next/image";

const AboutMeTileSection = () => {
  return (
    <div className="container m-auto pr-4 flex flex-row phone:flex-col phone:items-center bg-secondary rounded-3xl h-4/5">
      <div className="rounded-3xl overflow-hidden pl-[.75rem] m-5 w-[200px] h-[250px] relative">
        <Image fill src={`/profilePic5.jpg`} alt={""} />
      </div>
      <div className="pl-[2rem] w-3/4 phone:w-full ">
        <h1>About Me</h1>
        <p className="indent-8 text-white py-10 text-2xl">
          I am a Senior Software Developer who is comfortable working with both
          front-end and back-end technologies. My expertise, however, lies in
          both React web development and React Native mobile applications. I
          have led a team of four developers in order to redesign a website from
          the ground up and mentored junior developers along the way. I am a
          self starter that is always eager to learn the latest technologies and
          market trends, and have studied hours worth of content from paid
          courses on Udemy and Pluralsight. I have acquired an excellent
          reputation for resolving problems, improving customer satisfaction,
          and driving overall operational improvements. I am also known for
          freelancing in my spare time.
        </p>
      </div>
    </div>
  );
};

export default AboutMeTileSection;
