import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm1 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_8wevlia";
    const templateId = "template_hyeamrn";
    const publicKey = "V9G0hZRiV7bk1Jhc_";

    const templateParams = {
      user_name: name,
      user_phone: phone,
      user_email: email,
      user_subject: subject,
      from_name: "Mohamed Anas",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccessMessage(
          "Success! Thanks for contacting Arab Gate!. We'll connect soon!."
        );
        setErrorMessage("");
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSuccessMessage("");
        setErrorMessage("Failed to send message. Please try again later.");
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <form className="form-style-two" onSubmit={handleSubmit}>
      <div className="row">
        <span className="text-white h4-font pb-60 font-semibold">Get in Touch</span>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="phone"
              value={phone}
              className="form-control"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              value={email}
              className="form-control"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              value={subject}
              className="form-control"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              value={message}
              className="form-control"
              rows={4}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group pt-5 mb-0">
            <button type="submit" className="theme-btn style-two">
              Send Message <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-md-12 pt-30">
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm1;
