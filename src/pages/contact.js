import React from "react";
import styles from "@/styles/Home.module.scss";

const contact = () => {
  return (
    <main className={styles.main}>
      <div className="flex flex-col items-center justify-center">
        <h1>Contact Me</h1>

        <div className="pt-20">
          <h1>Kenny Willoughby</h1>
          <h1>Email: kwilloughby55@gmail.com</h1>
          <h1>
            <a href="https://www.linkedin.com/in/kenwilloughby/">LinkedIn</a>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default contact;
