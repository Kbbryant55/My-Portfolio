import React, { useState, useEffect } from "react";
import _ from "lodash";
import styles from "@/styles/Contact.module.scss";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleOnSubmit = () => {
    if (validateForm()) {
      let data = {
        contactName,
        contactEmail,
        contactPhone,
        contactMessage,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 200) {
          console.log(`Email sent!`);
          setContactName("");
          setContactEmail("");
          setContactPhone("");
          setContactMessage("");
          setErrors("");
        }
      });
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!contactName) {
      formErrors["contactName"] = "Please enter your name.";
    }
    if (!contactEmail) {
      formErrors["contactEmail"] = "Please enter your email.";
    }
    if (!validateEmail(contactEmail)) {
      formErrors["contactEmail"] = "Please enter a valid email.";
    }
    if (!contactPhone) {
      formErrors["contactPhone"] = "Please enter your phone number.";
    }
    if (!validatePhone(contactPhone)) {
      formErrors["contactPhone"] = "Please enter a valid phone number.";
    }
    if (!contactMessage) {
      formErrors["contactMessage"] = "Please enter a message";
    }

    setErrors(formErrors);

    if (_.isEmpty(formErrors)) return true;

    return false;
  };

  return (
    <main className={styles.main}>
      <div className={styles.contactResponsiveForm}>
        <div className={styles.contactLabel}>
          Please fill out the form below
        </div>
        <div className={styles.userInput}>
          <div>Name</div>
          <input
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          ></input>
          {errors.contactName && (
            <div className={styles.errors}>{errors.contactName}</div>
          )}
          <div></div>
        </div>
        <div className={styles.userInput}>
          <div>Email</div>
          <input
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          ></input>
          {errors.contactEmail && (
            <div className={styles.errors}>{errors.contactEmail}</div>
          )}
        </div>
        <div className={styles.userInput}>
          <div>Phone</div>
          <input
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          ></input>
          {errors.contactPhone && (
            <div className={styles.errors}>{errors.contactPhone}</div>
          )}
        </div>
        <div className={styles.userInput}>
          <div>Message</div>
          <textarea
            value={contactMessage}
            rows="8"
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>
          {errors.contactMessage && (
            <div className={styles.errors}>{errors.contactMessage}</div>
          )}
        </div>
        <div className={styles.submit}>
          <button onClick={handleOnSubmit}>Contact Me</button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
