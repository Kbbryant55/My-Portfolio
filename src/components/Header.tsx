import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin, IoMdMenu } from "react-icons/io";

interface NavMenuItemProps {
  text: string;
  url: string;
}

const NavMenuItem = ({ text, url }: NavMenuItemProps) => (
  <Link
    className="flex flex-col items-center pb-[13px] cursor-pointer text-white no-underline group"
    href={url}
  >
    <div className="py-[25px] px-[18px] pb-2 group-hover:text-secondary">
      {text}
    </div>
    <div className="bg-secondary h-[3px] w-0 transition-all duration-500 ease-in-out group-hover:w-full" />
  </Link>
);

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const breakpoint = 970;

  useEffect(() => {
    setMounted(true);
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (width > breakpoint) {
      setNavBarOpen(false);
    }
  }, [width]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-end px-20 pt-10 phone:px-5">
        <div className="flex flex-row justify-between w-[6rem]">
          <a
            href="https://www.linkedin.com/in/kenwilloughby/"
            target="linkedin"
          >
            <IoLogoLinkedin
              size={30}
              className="text-white hover:text-secondary"
            />
          </a>
          <a href="https://www.instagram.com/kennywillough/" target="instagram">
            <IoLogoInstagram
              size={30}
              className="text-white hover:text-secondary"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center px-20 phone:px-5">
        <h1 className="font-bold cursor-pointer hover:text-secondary">
          <Link href="/">Kenny's Portfolio</Link>
        </h1>
        <div className="flex px-10 phone:px-2 text-white p-8 items-center justify-end w-1/3">
          {width < breakpoint ? (
            <IoMdMenu size={30} onClick={() => setNavBarOpen(!navBarOpen)} />
          ) : (
            <>
              <NavMenuItem text="Home" url="/" />
              <NavMenuItem text="Resume" url="/resume" />
              <NavMenuItem text="Projects" url="/projects" />
              <NavMenuItem text="Contact" url="/contact" />
            </>
          )}
        </div>
      </div>

      {navBarOpen && (
        <div className="bg-light w-full flex flex-col items-center">
          <div className="w-full border-b-2 border-black">
            <NavMenuItem text="Home" url="/" />
            <NavMenuItem text="Resume" url="/resume" />
            <NavMenuItem text="Projects" url="/projects" />
            <NavMenuItem text="Contact" url="/contact" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
