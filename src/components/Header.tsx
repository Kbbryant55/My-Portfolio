import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMdMenu,
} from "react-icons/io";

interface NavMenuItemProps {
  text: string;
  url: string;
  onNavigate?: () => void;
}

const NavMenuItem = ({ text, url, onNavigate }: NavMenuItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === url;

  return (
    <Link
      className="flex flex-col items-center pb-[13px] cursor-pointer text-ink no-underline group"
      href={url}
      onClick={onNavigate}
    >
      <div
        className={`py-[25px] px-[18px] pb-2 transition-colors duration-200 ${
          isActive ? "text-light" : "group-hover:text-light"
        }`}
      >
        {text}
      </div>
      <div
        className={`bg-light h-[3px] transition-all duration-300 ease-in-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const closeMenu = () => setNavBarOpen(false);

  return (
    <header className="relative z-50 w-full overflow-visible">
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
            href="https://github.com/Kbbryant55"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IoLogoGithub
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
        <p className="font-display font-bold text-xl text-ink">
          <Link
            href="/"
            className="hover:text-light transition-colors duration-200"
          >
            Kenny&apos;s Portfolio
          </Link>
        </p>

        {/* Desktop nav — hidden at laptop breakpoint (<=960px) and below */}
        <nav className="flex laptop:hidden px-10 text-ink p-8 items-center justify-end w-1/3">
          <NavMenuItem text="Home" url="/" />
          <NavMenuItem text="Resume" url="/resume" />
          <NavMenuItem text="Projects" url="/projects" />
          <NavMenuItem text="Contact" url="/contact" />
        </nav>

        {/* Mobile menu button */}
        <div className="hidden laptop:flex px-2 p-8 items-center justify-end text-ink relative z-50">
          <button
            type="button"
            aria-label={navBarOpen ? "Close menu" : "Open menu"}
            aria-expanded={navBarOpen}
            aria-controls="mobile-nav"
            onClick={() => setNavBarOpen((open) => !open)}
            className="btn-icon"
          >
            <IoMdMenu
              size={30}
              className={`transition-transform duration-300 ${navBarOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      </div>

      {navBarOpen && (
        <nav
          id="mobile-nav"
          className="hidden laptop:block w-full border-t border-line bg-surface-form shadow-elevated"
        >
          <div className="w-full flex flex-col items-center py-2">
            <NavMenuItem text="Home" url="/" onNavigate={closeMenu} />
            <NavMenuItem text="Resume" url="/resume" onNavigate={closeMenu} />
            <NavMenuItem
              text="Projects"
              url="/projects"
              onNavigate={closeMenu}
            />
            <NavMenuItem text="Contact" url="/contact" onNavigate={closeMenu} />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
