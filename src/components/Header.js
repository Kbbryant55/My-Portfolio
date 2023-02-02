import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";

const NavMenuItem = ({ text, url }) => (
  <Link className={styles.menuItem} href={url}>
    <div className={styles.label}>{text}</div>
    <div className={styles.border} />
  </Link>
);

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className=" font-bold cursor-pointer hover:text-secondary">
        <Link href="/">Kenny's Portfolio</Link>
        <div className={styles.border} />
      </h1>

      <div className="flex px-10 phone:px-2 text-white p-8 items-center justify-between">
        {/* <NavMenuItem text={"Home"} url={"/"} /> */}
        <NavMenuItem text={"Resume"} url={"/resume"} />
        <NavMenuItem text={"Projects"} url={"/projects"} />
        <NavMenuItem text={"Contact Me"} url={"/contact"} />
      </div>
    </div>
  );
};

export default Header;
