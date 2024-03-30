import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      className="foot-logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a
                  href="https://www.facebook.com/profile.php?id=100091663875681"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" /> <span>Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/g-g-innovations/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" /> <span>Linkedin</span>
                </a>
                <a
                  href="https://www.instagram.com/gnginnovations/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" /> <span>Instagram</span>
                </a>
                <a
                  className="a-icon cursor"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UCZ8YJt8gCmvVIt7-IZtRevQ/"
                    )
                  }
                >
                  <i className="fab fa-youtube" /> <span>Youtube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <span
                className="lets-work mb-50 wow fadeInUp delay-0-2s animated"
                style={{ fontSize: 75, color: "#fff", lineHeight: 1.1 }}
              >
                <img
                  src="assets/images/footer/lets-work.png"
                  alt="Let's Work Man"
                  className="mt-4 mt-lg-0"
                />
                {/* <div> */}
                <span>Let's be partners in digital transformation</span>
                {/* </div> */}
              </span>
              <p>Still got questions? Drop us an email at: </p>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:info@gnginfotech.com"
                >
                  info@gnginfotech.com
                  <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="callto:+971507707942"
                >
                  +971-50 7707942 <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Quick Links
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="about">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="team">
                      Team Member
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="contact">
                      Contact Us?
                    </Link>
                  </li>
                </ul>
                <ul className="list-style-two wow fadeInUp delay-0-4s animated">
                  <li>
                    <Link legacyBehavior href="metaverse">
                      Metaverse
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blockchain">
                      Blockchain
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="artificial-intelligence">
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="faqs">
                      FAQ?
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">
                <ul>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/project-list">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Grosvenor+Business+Tower/@25.1435922,55.1822004,13z/data=!4m15!1m7!3m6!1s0x3e5f6b776f2b55d3:0x1c76655c23b0b5fe!2sGrosvenor+Business+Tower!8m2!3d25.0989782!4d55.1776195!16s%2Fg%2F11"
                      target="_blank"
                    >
                      Google Maps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright @2022,{" "}
                  <Link legacyBehavior href="/">
                    <a>G&G Infotech.</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
