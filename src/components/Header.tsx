import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin, IoMdMenu } from "react-icons/io";

interface NavMenuItemProps {
  text: string;
  url: string;
}

const NavMenuItem = ({ text, url }: NavMenuItemProps) => (
  <Link
    className="flex flex-col items-center pb-[13px] cursor-pointer text-ink no-underline group"
    href={url}
  >
    <div className="py-[25px] px-[18px] pb-2 group-hover:text-light transition-colors duration-200">
      {text}
    </div>
    <div className="bg-light h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
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
    if (width > breakpoint) setNavBarOpen(false);
  }, [width]);

  if (!mounted) {
    return (
      <header className="h-[7.5rem]" aria-hidden />
    );
  }

  return (
    <header>
      <div className="flex justify-end px-20 pt-10 phone:px-5">
        <div className="flex flex-row gap-4 w-[6rem] justify-between">
          <a
            href="https://www.linkedin.com/in/kenwilloughby/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin
              size={30}
              className="text-ink hover:text-light transition-colors duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/kennywillough/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IoLogoInstagram
              size={30}
              className="text-ink hover:text-light transition-colors duration-200"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center px-20 phone:px-5">
        <p className="font-display font-bold text-xl cursor-pointer hover:text-light transition-colors duration-200">
          <Link href="/">Kenny&apos;s Portfolio</Link>
        </p>
        <nav className="flex px-10 phone:px-2 text-ink p-8 items-center justify-end w-1/3">
          {width < breakpoint ? (
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={navBarOpen}
              onClick={() => setNavBarOpen(!navBarOpen)}
            >
              <IoMdMenu size={30} />
            </button>
          ) : (
            <>
              <NavMenuItem text="Home" url="/" />
              <NavMenuItem text="Resume" url="/resume" />
              <NavMenuItem text="Projects" url="/projects" />
              <NavMenuItem text="Contact" url="/contact" />
            </>
          )}
        </nav>
      </div>

      {navBarOpen && (
        <div className="bg-surface-form border-t border-line w-full flex flex-col items-center">
          <div className="w-full">
            <NavMenuItem text="Home" url="/" />
            <NavMenuItem text="Resume" url="/resume" />
            <NavMenuItem text="Projects" url="/projects" />
            <NavMenuItem text="Contact" url="/contact" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
