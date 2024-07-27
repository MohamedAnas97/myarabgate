import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import ContactLayout from "@/src/components/contactFooter";
const ProductDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Our Sevices"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-40">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font ">
              we offer a comprehensive range of services tailored to meet your
              needs. From interior fit-out and renovation to electrical,
              plumbing, and HVAC maintenance, we're here to ensure your space is
              not only functional but also comfortable and aesthetically
              pleasing. With a focus on quality craftsmanship, reliability, and
              customer satisfaction, you can trust us to deliver exceptional
              results every time.
            </h5>
          </div>
        </div>
      </div>
      <section className="blog-area-four pt-70 rpt-40 pb-70 rpb-20">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s4.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/interior-fitout">
                      <a className="font-fam">
                        Interior Fit-out and Renovation
                      </a>
                    </Link>
                  </h5>
                  <Link href="/interior-fitout">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s1.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/electrical-services">
                      <a className="font-fam">Electrical Services</a>
                    </Link>
                  </h5>
                  <Link href="/electrical-services">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s5.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/plumbing-services">
                      <a className="font-fam ">Plumbing Services</a>
                    </Link>
                  </h5>
                  <Link href="/plumbing-services">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s2.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/ac-maintenance-repair">
                      <a className="font-fam ">HVAC Maintenance and Repair</a>
                    </Link>
                  </h5>
                  <Link href="/ac-maintenance-repair">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s11.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/painting-epoxy">
                      <a className="font-fam ">Painting and Epoxy</a>
                    </Link>
                  </h5>
                  <Link href="/painting-epoxy">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span> </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s8.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/cctv-security-system">
                      <a className="font-fam "> CCTV Security Systems</a>
                    </Link>
                  </h5>
                  <Link href="/cctv-security-system">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s6.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/digital-display-signages">
                      <a className="font-fam "> Digital Displays & Signages</a>
                    </Link>
                  </h5>
                  <Link href="/digital-display-signages">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span> </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/s12.jpg"
                    alt="image" />
                  <Link legacyBehavior href="/contact-us">
                    <a className="category font-fam">Book Now</a>
                  </Link>
                </div>
                <div className="content">
                  <h5>
                    <Link legacyBehavior href="/display-fixtures-retail-exhibitions">
                      <a className="font-fam ">
                      Display Fixtures for Retail & Exhibitions
                      </a>
                    </Link>
                  </h5>
                  <Link href="/display-fixtures-retail-exhibitions">
                  <span>
                    <a className="read-more1 text-white font-fam">
                      More Details
                      <i className="far fa-arrow-right" />
                    </a>
                  </span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rmy-30">
        <ContactLayout />
      </div>
    </Layout>
  );
};
export default ProductDetails;
