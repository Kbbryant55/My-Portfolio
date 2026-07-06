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
      const data = {
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
          if (response.ok) return response.json();
          throw new Error("Network response was not ok");
        })
        .then(() => {
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
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const validatePhone = (phone: string) => {
    return String(phone)
      .toLowerCase()
      .match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
  };

  const validateForm = () => {
    const formErrors: FormErrors = {};

    if (!contactName) formErrors.contactName = "Please enter your name.";
    if (!contactEmail) formErrors.contactEmail = "Please enter your email.";
    else if (!validateEmail(contactEmail))
      formErrors.contactEmail = "Please enter a valid email.";
    if (!contactPhone) formErrors.contactPhone = "Please enter your phone number.";
    else if (!validatePhone(contactPhone))
      formErrors.contactPhone = "Please enter a valid phone number.";
    if (!contactMessage) formErrors.contactMessage = "Please enter a message";

    setErrors(formErrors);
    return _.isEmpty(formErrors);
  };

  return (
    <main className="page-shell">
      <div className="surface-form w-full max-w-lg p-10 phone:p-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-8">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-5 ring-4 ring-light/30">
              <svg
                className="w-8 h-8 text-ink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mb-3">Message sent</h2>
            <p className="text-body">
              Thank you for reaching out! I will be in contact with you soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-center mb-2">Get in touch</h2>
            <p className="text-body text-center mb-8">
              Please fill out the form below and I&apos;ll get back to you.
            </p>
            <div className="space-y-5">
              <div>
                <label className="block text-meta mb-2" htmlFor="contactName">
                  Name
                </label>
                <input
                  id="contactName"
                  className="input-field"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
                {errors.contactName && (
                  <p className="text-red-400 text-sm mt-1">{errors.contactName}</p>
                )}
              </div>
              <div>
                <label className="block text-meta mb-2" htmlFor="contactEmail">
                  Email
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  className="input-field"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
                {errors.contactEmail && (
                  <p className="text-red-400 text-sm mt-1">{errors.contactEmail}</p>
                )}
              </div>
              <div>
                <label className="block text-meta mb-2" htmlFor="contactPhone">
                  Phone
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  className="input-field"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
                {errors.contactPhone && (
                  <p className="text-red-400 text-sm mt-1">{errors.contactPhone}</p>
                )}
              </div>
              <div>
                <label className="block text-meta mb-2" htmlFor="contactMessage">
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  className="input-field min-h-[8rem]"
                  value={contactMessage}
                  rows={6}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
                {errors.contactMessage && (
                  <p className="text-red-400 text-sm mt-1">{errors.contactMessage}</p>
                )}
              </div>
              {errors.submit && (
                <p className="text-red-400 text-sm text-center">{errors.submit}</p>
              )}
              <button
                type="button"
                onClick={handleOnSubmit}
                className="btn-primary w-full"
              >
                Contact Me
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Contact;
