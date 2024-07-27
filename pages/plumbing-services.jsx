import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
// import Link from "next/link";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
// import { Nav, Tab } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const PlumbingServices = () => {
  const accordionData = [
    {
      id: 1,
      title: "What types of plumbing services do you offer?",
      content:
        "We offer a comprehensive range of plumbing services, including but not limited to leak detection and repair, pipe installation and repair, drain cleaning, water heater installation and repair, and plumbing fixture installation.",
    },
    {
      id: 2,
      title:
        "Do you guarantee the quality of your workmanship and materials?",
      content:
        " Yes, we take pride in the quality of our workmanship and the materials we use. We stand behind our services and offer warranties to ensure your satisfaction with the completed plumbing work.",
    },
    {
      id: 3,
      title: "Can you provide estimates before starting a plumbing project?",
      content:
        " Absolutely! We offer free estimates for all plumbing projects. Our experienced technicians will assess the scope of the work and provide you with a detailed estimate, ensuring transparency and clarity before beginning any work.",
    },
    {
      id: 4,
      title:
        "How do you ensure cleanliness and minimize disruption during plumbing repairs or installations?",
      content:
        "Our team takes great care to maintain a clean work area and minimize disruption to your home or business during plumbing repairs or installations. We use drop cloths, shoe covers, and cleanup equipment to ensure your space is left tidy once the job is complete.",
    },
    {
      id: 5,
      title:
        "Are your plumbers licensed and insured?",
      content:
        "Yes, all of our plumbers are fully licensed, insured, and highly trained professionals. You can trust that our team has the expertise and qualifications to handle your plumbing needs safely and effectively.",
    },
    {
      id: 6,
      title:
        "What measures do you take to ensure customer satisfaction with your plumbing services?",
      content:
        "Customer satisfaction is our top priority. We achieve this by providing transparent communication, prompt responses to inquiries, and courteous service from our skilled plumbers. We also offer follow-up support to ensure that our customers are completely satisfied with the work performed. Additionally, we welcome feedback and use it to continually improve our services, ensuring that every customer's experience with us is positive and hassle-free.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={" Plumbing Services"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We understand the importance of a smoothly functioning plumbing
              system in both residential and commercial spaces.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              Our team of skilled plumbers is dedicated to providing
              comprehensive plumbing services to ensure the reliability, safety
              and efficiency of your water and drainage systems.
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
                Prompt and Reliable experienced Plumbers
                </li>
                <li className="text-color font-fam h5-font">
                Residential Plumbing Solutions
                </li>
                <li className="text-color font-fam h5-font">
                Commercial Plumbing Services
                </li>
                <li className="text-color font-fam h5-font">
                Industrial Plumbing Solutions
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
                  <img src="assets/images/arab/pmb1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pmb8.jpg" alt="" />
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
                <img src="assets/images/arab/c11.png" alt="FAQs" />
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
export default PlumbingServices;
