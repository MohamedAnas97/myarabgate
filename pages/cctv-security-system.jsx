import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm1 from "@/src/components/ContactForm1";
import { useState } from "react";
const CctvService = () => {
  const accordionData = [
    {
      id: 1,
      title: "How can your CCTV security systems enhance the safety and security of my property?",
      content:
        "Our CCTV security systems provide round-the-clock surveillance, deterring potential threats and enabling swift response to any suspicious activity, ensuring your property remains safe and secure at all times.",
    },
    {
      id: 2,
      title:
        "Will the installation of your CCTV systems disrupt my daily activities or business operations?",
      content:
        "Our professional installation team works efficiently and minimizes disruptions, ensuring a seamless transition to enhanced security measures without interrupting your daily routines or business operations.",
    },
    {
      id: 3,
      title: "Can I easily access and manage footage from your CCTV systems?",
      content:
        "Absolutely! Our user-friendly interfaces allow you to conveniently access and manage footage from your CCTV systems remotely, giving you peace of mind and control over your property's security from anywhere, anytime.",
    },
    {
      id: 4,
      title:
        "	How do you ensure the reliability and effectiveness of your CCTV systems over time?",
      content:
        "We utilize top-quality components and conduct thorough testing to ensure the reliability and effectiveness of our CCTV systems. Additionally, we provide ongoing support and maintenance to keep your system functioning optimally for years to come.",
    },
    {
      id: 5,
      title:
        "	Can your CCTV systems be tailored to meet my specific security needs?",
      content:
        "Yes, our CCTV systems are highly customizable to accommodate your unique security requirements. Whether you need additional cameras, specialized features, or integration with existing security systems, we can tailor a solution that meets your needs perfectly.",
    },
    {
      id: 6,
      title:
        " What measures do you take to protect customer privacy with your CCTV systems?",
      content:
        " Customer privacy is a top priority for us. Our CCTV systems are designed and implemented with strict adherence to privacy regulations. We employ advanced encryption methods, access controls, and clear signage to ensure the protection of customer privacy at all times.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={" CCTV Security Systems "} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We offer diverse range of services to establish security in your
              property through tried and tested surveillance systems.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              CCTV surveillance systems is the most important technology that
              ensures impeccable security and safety to the residence in Dubai.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              The evidences collected through CCTV cameras helps the
              authorities, security and business owners to uncover the details
              of a specific incident.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              Cameras with an intrusion alarm provides shops and business
              environments much needed security.
            </h5>
          </div>
          <div className="about-content wow fadeInUp delay-0-4s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
              Our Services Includes :
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                Wireless and wired CCTV Cameras
                </li>
                <li className="text-color font-fam h5-font">
                Digital video recorders (DVRs)
                </li>
                <li className="text-color font-fam h5-font">
                Dome Cameras
                </li>
                <li className="text-color font-fam h5-font">
                Bullet cameras
                </li>
                <li className="text-color font-fam h5-font">
                Pin Hole Cameras
                </li>
                <li className="text-color font-fam h5-font">
                Box cameras
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="work-gallery-area py-80 rpy-50">
        <div className="container">
          <Swiper
            {...sliderProps.galleryFiveActive}
            className="gallery-five-active"
          >
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc10.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc8.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="work-gallery-controls">
            <button className="work-gallery-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="work-gallery-dots slick-dots" />
            <button className="work-gallery-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      <section className="faq-area pt-20 rpt-0 pb-130 rpb-110 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="faq-content-part rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-60 rmb-30">
                  <h2 className="h3-font font-fam">Frequently Asked Question</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      content={data.content}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="faq-four-iamge2 wow fadeInLeft delay-0-2s">
                <img src="assets/images/arab/person.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ContactLayout />
      </div>
    </Layout>
  );
};
export default CctvService;
