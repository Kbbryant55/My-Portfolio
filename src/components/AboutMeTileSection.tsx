import React from "react";
import ProfilePicture from "./ProfilePicture";
import SurfaceCard from "./SurfaceCard";

const AboutMeTileSection = () => {
  return (
    <SurfaceCard className="m-auto pr-4 pt-10 flex flex-row phone:flex-col phone:items-center">
      <ProfilePicture priority />
      <div className="pl-8 w-3/4 phone:w-full phone:pl-0 phone:px-4">
        <h2 className="section-title">About Me</h2>
        <p className="text-body py-6 phone:py-5">
          I am a Senior Software Developer who is comfortable working with both
          front-end and back-end technologies. My expertise, however, lies in
          both React web development and React Native mobile applications. I
          have led a team of four developers to redesign a website from the
          ground up, and mentored junior developers along the way. I am a
          self-starter who is always eager to learn the latest technologies and
          market trends, and have studied hours of content from paid courses on
          Udemy and Pluralsight. Over the years, I have built an excellent
          reputation for resolving problems, improving customer satisfaction,
          and driving overall operational improvements. In my spare time, I
          enjoy playing and creating videogames, and freelancing for a virtual
          reality startup.
        </p>
      </div>
    </SurfaceCard>
  );
};

export default AboutMeTileSection;
