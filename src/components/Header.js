import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";

import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook,
  IoMdMenu,
} from "react-icons/io";

const NavMenuItem = ({ text, url }) => (
  <Link className={styles.menuItem} href={url}>
    <div className={styles.label}>{text}</div>
    <div className={styles.border} />
  </Link>
);

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [width, setWidth] = React.useState(
    isBrowser() ? window.innerWidth : 971 //set width greater than breakpoint on mount if not a browser
  );
  const breakpoint = 970;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    if (isBrowser()) {
      window.addEventListener("resize", handleWindowResize);
    }

    // Return a function from the effect that removes the event listener
    return () => {
      if (isBrowser()) {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  useEffect(() => {
    if (width > breakpoint) {
      setNavBarOpen(false);
    }
  }, [width]);

  return (
    <div className={styles.header}>
      <div className="flex justify-end px-20 pt-10 phone:px-5">
        <div className={"flex flex-row justify-between w-1/3 phone:w-full"}>
          <a
            href="https://www.facebook.com/kenny.willoughby.9"
            target="facebook"
          >
            <IoLogoFacebook size={30} className={styles.socialMedia} />
          </a>
          <a href="https://twitter.com/KWilloughby55" target="twitter">
            <IoLogoTwitter size={30} className={styles.socialMedia} />
          </a>
          <a
            href="https://www.linkedin.com/in/kenwilloughby/"
            target="linkedin"
          >
            <IoLogoLinkedin size={30} className={styles.socialMedia} />
          </a>
          <a href="https://www.instagram.com/kennywillough/" target="instagram">
            <IoLogoInstagram size={30} className={styles.socialMedia} />
          </a>
        </div>
      </div>

      <div
        className={
          "flex flex-row justify-between items-center px-20 phone:px-5"
        }
      >
        <h1 className=" font-bold cursor-pointer hover:text-secondary ">
          <Link href="/">Kenny's Portfolio</Link>
        </h1>
        <div className="flex px-10 phone:px-2 text-white p-8 items-center justify-end w-1/3 ">
          {width < breakpoint ? (
            <>
              <IoMdMenu size={30} onClick={() => setNavBarOpen(!navBarOpen)} />
            </>
          ) : (
            <>
              <NavMenuItem text={"Home"} url={"/"} />
              <NavMenuItem text={"Resume"} url={"/resume"} />
              <NavMenuItem text={"Projects"} url={"/projects"} />
              <NavMenuItem text={"Contact Me"} url={"/contact"} />
            </>
          )}
        </div>
      </div>

      {navBarOpen && (
        <div
          className={
            navBarOpen
              ? styles.Hamburger_Menu__Container
              : styles.Hamburger_Menu__isOpen
          }
        >
          <div className={styles.Hamburger__Items}>
            <NavMenuItem text={"Home"} url={"/"} />
            <NavMenuItem text={"Resume"} url={"/resume"} />
            <NavMenuItem text={"Projects"} url={"/projects"} />
            <NavMenuItem text={"Contact Me"} url={"/contact"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
