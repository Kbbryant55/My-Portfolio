import React, { useState } from "react";
import _ from "lodash";

interface FormErrors {
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactMessage?: string;
  submit?: string;
}

const Contact = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok");
        })
        .then((data) => {
          setContactName("");
          setContactEmail("");
          setContactPhone("");
          setContactMessage("");
          setErrors({});
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrors({
            submit:
              "There was an error submitting your message. Please try again.",
          });
        });
    }
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone: string) => {
    return String(phone)
      .toLowerCase()
      .match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
  };

  const validateForm = () => {
    let formErrors: FormErrors = {};

    if (!contactName) {
      formErrors.contactName = "Please enter your name.";
    }
    if (!contactEmail) {
      formErrors.contactEmail = "Please enter your email.";
    }
    if (!validateEmail(contactEmail)) {
      formErrors.contactEmail = "Please enter a valid email.";
    }
    if (!contactPhone) {
      formErrors.contactPhone = "Please enter your phone number.";
    }
    if (!validatePhone(contactPhone)) {
      formErrors.contactPhone = "Please enter a valid phone number.";
    }
    if (!contactMessage) {
      formErrors.contactMessage = "Please enter a message";
    }

    setErrors(formErrors);

    if (_.isEmpty(formErrors)) return true;

    return false;
  };

  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen phone:p-8">
      {isSubmitted ? (
        <div className="max-w-[40rem] min-w-[15rem] w-3/5 h-3/5 p-20 rounded-[2rem] bg-[rgb(248,248,248)] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] phone:p-8">
          <div className="text-center text-[1.5rem] text-black py-8 px-8 bg-[#f8f9fa]">
            Thank you for reaching out! I will be in contact with you soon!
          </div>
        </div>
      ) : (
        <div className="max-w-[40rem] min-w-[15rem] w-3/5 h-3/5 p-20 rounded-[2rem] bg-[rgb(248,248,248)] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] phone:p-8">
          <div className="font-medium text-xl tracking-tight leading-5 text-center text-dark py-5 px-10 phone:text-base phone:text-xs">
            Please fill out the form below
          </div>
          <div className="space-y-4">
            <div className="font-normal text-lg leading-5 text-left text-dark pb-2.5 phone:text-base phone:text-xs">
              <div className="pb-2">Name</div>
              <input
                className="w-full rounded-lg bg-white border border-[#dadfe7] pb-[15px]"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              {errors.contactName && (
                <div className="text-red-500">{errors.contactName}</div>
              )}
            </div>
            <div className="font-normal text-lg leading-5 text-left text-dark pb-2.5 phone:text-base phone:text-xs">
              <div className="pb-2">Email</div>
              <input
                className="w-full rounded-lg bg-white border border-[#dadfe7] pb-[15px]"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
              {errors.contactEmail && (
                <div className="text-red-500">{errors.contactEmail}</div>
              )}
            </div>
            <div className="font-normal text-lg leading-5 text-left text-dark pb-2.5 phone:text-base phone:text-xs">
              <div className="pb-2">Phone</div>
              <input
                className="w-full rounded-lg bg-white border border-[#dadfe7] pb-[15px]"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
              {errors.contactPhone && (
                <div className="text-red-500">{errors.contactPhone}</div>
              )}
            </div>
            <div className="font-normal text-lg leading-5 text-left text-dark pb-2.5 phone:text-base phone:text-xs">
              <div className="pb-2">Message</div>
              <textarea
                className="w-full rounded-lg bg-white border border-[#dadfe7]"
                value={contactMessage}
                rows={8}
                onChange={(e) => setContactMessage(e.target.value)}
              />
              {errors.contactMessage && (
                <div className="text-red-500">{errors.contactMessage}</div>
              )}
            </div>
            <div className="px-10 py-2.5">
              <button
                onClick={handleOnSubmit}
                className="flex justify-center items-center w-full text-center"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;
