import ContactForm1 from "./ContactForm1";
const ContactFooter = () => {
  return (
    <section className="drop-me-area">
      <div className="container container-1290">
        <div className="row align-items-center justify-content-center justify-content-lg-between mb-40 rmb-10">
          <div className="col-lg-5">
            <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
              <div className="row">
                <div className="col-xl-10">
                  <div className="section-title mb-20">
                    <span className="text-color font-fam ">Just shout us out!</span>
                    <div className="footer-contact-info wow fadeInUp delay-0-2s animated">
                      <h5 className="text-color font-fam">
                        Still got questions? Drop us an email at:{" "}
                      </h5>
                      <div className="our-location-address">
                        <a
                          className="callto text-color font-fam font-semibold"
                          href="mailto:agarabgate@gmail.com"
                        >
                          <i className="fas fa-envelope" />
                          agarabgate@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gap-80 ">
                <div className="col-sm-12">
                  <div className="our-location-address ">
                    <h5 className="text-color font-fam">DUBAI, UAE</h5>
                    <p className="text-color font-fam font-semibold">
                      ARAB GATE Technical Services LLC, B Block 104, Al Shaali
                      Building, Damascus Street, Al Qusais
                    </p>

                    <a
                      className="callto text-color font-fam font-semibold"
                      href="callto:+971 585443090"
                    >
                      <i className="fas fa-phone-alt" /> +971 585443090 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="drop-me-form-part rmb-30 rmb-30 wow fadeInUp delay-0-2s contact-background">
              <ContactForm1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactFooter;
