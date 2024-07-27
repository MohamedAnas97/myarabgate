import Link from "next/link";
import { useState, useEffect } from "react";
const Footer3 = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Thank you for subscribing to Arab Gate!');
    setEmail('');
  };
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  return (
    <footer
      className="main-footer footer-three rel bgs-cover z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape-two.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top-two pt-45 pb-30">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/arab/brand.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s">
                <a  href="https://www.facebook.com/agarabgate/"
              target="_blank"><i className="fab fa-facebook-f" />Facebook</a>
                <a href="https://www.instagram.com/ag_arabgate" target="_blank"><i className="fab fa-instagram" />Instagram</a>
                <a href="https://www.youtube.com/channel/UCvwyj0zLeK3IlQ407MEvWuw" target="_blank"><i className="fab fa-youtube" />Youtube</a>
                <a  href="https://www.tiktok.com/@arabgate"
              target="_blank"><i className="fab fa-tiktok" />TikTok</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-12 ">
            <div className="footer-widget footer-text wow fadeInUp delay-0-2s">
              <h5 className="footer-title font-fam">Get In Touch</h5>
              <div className="">
                <div className="d-flex ">
                  <p className="foot-ml">
                    <i className="far fa-map-marker-alt" />
                  </p>
                  <p>
                    ARAB GATE Technical Services LLC, B Block 104, Al Shaali
                    Building, Damascus Street, Al Qusais
                  </p>
                </div>
                <div className="d-flex ">
                  <p className="foot-ml">
                    <i className="far fa-envelope" />
                  </p>
                  <p>
                    <a href="mailto:agarabgate@gmail.com">agarabgate@gmail.com</a>
                  </p>
                </div>
                <div className="d-flex ">
                  <p className="foot-ml ">
                    <i className="far fa-phone-alt" />
                  </p>
                  <a href="tel:+971585443090">+971 585443090 </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-2s">
              <h5 className="footer-title font-fam">Subscribe To Our Newsletter</h5>
              <form className="footer-newsletter" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email Address" 
          required 
          value={email}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fas fa-arrow-right" />
        </button>
      </form>
       {successMessage && <div className="success-message">{successMessage}</div>}
      
      {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
          </div>
        </div>
        <div className="copyright-area text-center  pb-20 ">
          <p>
            Copyright @2024 {" "}
            <Link legacyBehavior href="/">
              <a>Arab Gate</a>
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer3;
