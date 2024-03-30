import React, { useState
} from "react";
import emailjs from "@emailjs/browser";
import "react-notifications/lib/notifications.css"
import { NotificationContainer, NotificationManager } from "react-notifications";
import { Fragment } from "react";
const SideBar = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
 
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
       NotificationManager.success('Thanks for contacting Arab Gate!. We ll connect soon!', 'Success');
       setName("");
       setPhone("");
       setEmail("");
       setSubject("");
       setMessage("");
     })
     .catch((error) => {
       console.error("Error sending email:", error);
       NotificationManager.error('Failed to send message. Please try again later.', 'Error');
     });
 };
   
  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
      <NotificationContainer />
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Leave a Message</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  <span> Submit Now</span>
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a
              href="https://www.facebook.com/agarabgate/"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/ag_arabgate" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvwyj0zLeK3IlQ407MEvWuw"
              target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.tiktok.com/@arabgate"
              target="_blank"
            >
              <i className="fab fa-tiktok" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
