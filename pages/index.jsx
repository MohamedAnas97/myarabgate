import Home5Slider from "@/src/components/sliders/Home5Slider";
import Layout from "@/src/layout/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import ReactPlayer from "react-player";
import ContactLayout from "@/src/components/contactFooter";

const index5 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 568 },
      items: 2,
    },
    mobile2: {
      breakpoint: { max: 567, min: 0 },
      items: 1,
    },
  };
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/arab-gate.mp4";
  return (
    <Layout footer={5} header={5}>
      <Home5Slider />
      <section className="what-we-offer pb-90 rpb-50">
        <div className="container container-1290">
          <div className="section-title text-center mt-60 mb-40 wow fadeInUp delay-0-2s">
            <h3 className="text-color font-fam h2-font">
              How Can We Help You Today?
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/interior.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/interior-fitout">
                    Interior Fit-Out and Renovation
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/electric-service.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/electrical-services">Electrical Services</Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/plumbing.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/plumbing-services">Plumbing Services</Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/maintenance.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/ac-maintenance-repair">
                    HVAC Maintenance and Repair
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/painting-roll.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/painting-epoxy">Painting and Epoxy</Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/cctv-camera.png" alt="" />
                </div>

                <h4 className="font-fam h4-font">
                  <Link href="/cctv-security-system">
                    CCTV Security Systems
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/display.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/digital-display-signages">
                    Digital Displays & Signages
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="/assets/images/arab/in-store-display.png" alt="" />
                </div>
                <h4 className="font-fam h4-font">
                  <Link href="/display-fixtures-retail-exhibitions">
                    Display Fixtures for Retail & Exhibitions
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Box end */}
      {/* About Us Area start */}
      <div className="container container-1290 wow fadeInUp delay-0-2s">
        <div className="hero-bottom-image  mb-60 rmb-40 wow fadeInUp delay-0-2s">
          <ReactPlayer
            url={video}
            controls={false}
            loop
            playing
            playsinline={true}
            muted={true}
            className="video-container"
          />
        </div>
      </div>

      {/* Team Area start */}
      <section className="team-area pt-40 rpt-10 pb-100 rpb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title text-center font-fam ">
                  Our Services
                </span>
                <h2 className="text-color h2-font font-fam">
                  Quality Service is Our Guarantee
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6 ">
              <div className="team-member style-three wow fadeInUp delay-0-2s ">
                <div className="image">
                  <img src="assets/images/arab/h2.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content ">
                  <h4 className="text-color font-fam">Electrical Services</h4>
                  <h6 className="text-color font-fam h6-font mt-10 five-line">
                    This encompasses the installation, repair, and maintenance
                    of electrical systems in residential, commercial, and
                    industrial buildings. It includes wiring, lighting, outlets,
                    circuit breakers, and other electrical components
                  </h6>
                  <Link href="/electrical-services">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h4.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam">Plumbing Services</h4>
                  <h6 className="text-color font-fam h6-font mt-10 five-line">
                    Prompt and reliable plumbing services for residential,
                    commercial, and industrial spaces. Trust our skilled team
                    for comprehensive solutions to ensure the efficiency and
                    safety of your water and drainage systems.
                  </h6>
                  <Link href="/plumbing-services">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h8.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam ">Painting and Epoxy</h4>
                  <h6 className="text-color font-fam h6-font mt-10 five-line">
                    Painting services involve applying paint to surfaces, both
                    interior and exterior, to enhance aesthetics and protect
                    against corrosion. Epoxy coatings are often used for
                    flooring and provide durability and chemical resistance.
                  </h6>
                  <Link href="/painting-epoxy">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h88.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam">CCTV Security Systems</h4>
                  <h6 className="text-color font-fam h6-font mt-10 five-line">
                    Closed-Circuit Television systems are used for surveillance
                    and security purposes. Installation and maintenance of CCTV
                    systems help monitor and secure premises.
                  </h6>
                  <Link href="/cctv-security-system">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h7.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam">
                    Interior Fit-out and Renovation
                  </h4>
                  <h6 className="text-color font-fam h6-font mt-10 four-line">
                    This involves the process of making interior spaces suitable
                    for occupation. It includes tasks like space planning,
                    installing fixtures, flooring, walls, ceilings, and other
                    interior elements.
                  </h6>

                  <Link href="/interior-fitout">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h1.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam">
                    HVAC Maintenance and Repair
                  </h4>
                  <h6 className="text-color font-fam h6-font mt-10 four-line">
                    HVAC stands for Heating, Ventilation, and Air Conditioning.
                    This service involves maintaining, repairing, and installing
                    heating and cooling systems in buildings.
                  </h6>
                  <Link href="/ac-maintenance-repair">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h5.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam">
                    Digital Displays & Signages
                  </h4>
                  <h6 className="text-color font-fam h6-font mt-10 four-line">
                    This involves the installation and maintenance of digital
                    signage solutions for advertising, information display, and
                    branding purposes.
                  </h6>
                  <Link href="/digital-display-signages">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/h6.png" alt="image" />
                  <Link href="/contact-us">
                    <div className="social-style-two">
                      <button className="button-color font-fam">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="content">
                  <h4 className="text-color font-fam">
                    Display Fixtures for Retail & Exhibitions
                  </h4>
                  <h6 className="text-color font-fam h6-font mt-10 four-line">
                    This involves designing, fabricating, and installing display
                    fixtures for retail stores, exhibitions, trade shows, and
                    other commercial spaces to showcase products effectively.
                  </h6>
                  <Link href="/display-fixtures-retail-exhibitions">
                    <span>
                      <a className="read-more1 font-fam">
                        More Details
                        <i className="far fa-arrow-right" />
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area-five pt-60 pb-100 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="my-skill-content rmb-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <h2 className="text-white font-fam">About Us</h2>
                </div>
                <p className="font-fam">
                  Welcome to Arab Gate, your trusted source for top-notch
                  maintenance services. With eight years of industry expertise,
                  we specialize in tailored solutions for residential,
                  commercial and industrial spaces. Our skilled team is
                  committed to prompt, reliable and quality service. Choose arab
                  gate for hassle-free maintenance, ensuring your spaces remain
                  in optimal condition.
                </p>
                <Link href="/about">
                  <span>
                    <a className="read-more font-fam mt-10">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="faq-four-iamge wow fadeInLeft delay-0-2s">
                <img src="assets/images/arab/person.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="headline-area pt-30 rpt-30 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span className="font-fam">
              Your <span>problems;</span> our solutions
            </span>
          </div>
        </div>
      </div>
      <div className="mt-60">
        <ContactLayout />
      </div>
      <section className="review-bg">
        <div className="section-title text-center pt-80 rpt-50 wow fadeInUp delay-0-2s">
          <h3 className="text-color font-fam h2-font">
            What Our Customers Say About Us
          </h3>
        </div>
        <div className="container container-1290 pt-50 rpt-20  pb-50 rpb-20">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={5000}
          >
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> We've relied on Arab Gate for
                all our electrical, plumbing, and HVAC needs, and they never
                disappoint. Their technicians are knowledgeable, reliable, and
                always go above and beyond to ensure our systems are running
                smoothly. A trusted partner indeed!
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Ahmed M</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> I can't thank Arab Gate enough
                for their prompt response and top-notch service when we needed
                urgent painting and epoxy work done. Their attention to detail
                and dedication to quality craftsmanship truly sets them apart.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Fathima</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span>Arab Gate's maintenance packages
                have been a lifesaver for our business. Their proactive approach
                to maintenance has helped us avoid costly repairs and downtime.
                Their team is professional, courteous, and always willing to go
                the extra mile.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Hassan B</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> The CCTV security systems
                installed by Arab Gate have provided us with peace of mind
                knowing that our property is protected. Their expertise in
                security solutions coupled with their excellent customer service
                makes them our go-to choice.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Mariam S</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span>We've been extremely impressed
                with Arab Gate's digital displays and signages. Not only do they
                enhance our brand visibility, but their team also provides
                ongoing support and maintenance, ensuring optimal performance at
                all times
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Khalid R</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> Arab Gate's display fixtures
                for retail and exhibitions have helped us showcase our products
                in the best possible light. Their innovative designs and
                attention to detail have undoubtedly contributed to our success
                at trade shows and events.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Layla H</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> Arab Gate's painting and epoxy
                services gave our property a fresh new look that exceeded our
                expectations. Their team worked diligently to ensure every
                detail was perfect, and the results speak for themselves. I'm
                extremely satisfied with their work and would highly recommend
                them to others
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Amira K</h4>
            </div>
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};
export default index5;
