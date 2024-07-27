import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const ElectricalServices = () => {
  const accordionData = [
    {
      id: 1,
      title: " What types of electrical services do you offer?",
      content:
        "We offer a wide range of electrical services, including installation, repair, maintenance, and upgrades for residential, commercial, and industrial properties.",
    },
    {
      id: 2,
      title: "Are your electricians licensed and insured?",
      content:
        "Yes, all our electricians are fully licensed, insured, and highly trained professionals with extensive experience in the field. You can trust us to handle your electrical needs safely and efficiently.",
    },
    {
      id: 3,
      title:
        "How do you ensure electrical safety during installations and repairs?",
      content:
        "Safety is our top priority. We strictly adhere to all electrical codes and regulations, use proper safety equipment, and follow industry best practices to ensure the safety of our clients and their properties.",
    },
    {
      id: 4,
      title: "Do you offer emergency electrical services?",
      content:
        "Yes, we understand that electrical emergencies can happen at any time. That's why we offer 24/7 emergency electrical services to address urgent issues promptly and minimize disruption to your home or business.",
    },
    {
      id: 5,
      title: "Can you help with energy-efficient lighting solutions or electrical upgrades?",
      content:
        "Absolutely! We specialize in energy-efficient lighting solutions and can recommend and install LED lighting, smart lighting controls, and other energy-saving technologies to help you reduce your energy consumption and save on utility bills.",
    },
    {
      id: 6,
      title: "How do you handle electrical inspections and code compliance?",
      content:
        "We conduct thorough electrical inspections to identify any issues and ensure compliance with local electrical codes and regulations. If any deficiencies are found, we provide recommendations and solutions to bring your electrical system up to code.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Electrical Services"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-20 text-color font-fam h5-font">
              We take pride in delivering top-tier electrical services tailored
              to meet the diverse needs of our clients.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              Whether you're a homeowner, a business owner or a property
              manager, our team of skilled electricians is dedicated to ensuring
              the safety, reliability and efficiency of your electrical systems.
              Specialized in Electrical panel installation,repair and
              maintenance.
            </h5>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Commercial Electrical Services:
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  <span className="font-semibold">
                    Customized Wiring and Lighting
                  </span>{" "}
                  Tailored electrical solutions for offices, retail spaces and
                  commercial establishments. Energy-efficient lighting designs
                  to create a welcoming and productive environment.
                </li>
                <li className="text-color font-fam h5-font">
                  <span className="font-semibold"> Repair and Maintenance</span>{" "}
                  Swift response for electrical repairs, troubleshooting and
                  maintenance. Regular inspections to identify and address
                  potential issues before they become major concerns.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Residential Electrical Solutions:
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  <span className="font-semibold">
                    Installation and Upgrades
                  </span>{" "}
                  Safely install new electrical systems or upgrade existing
                  ones. Enhance your home with the latest in energy-efficient
                  lighting and appliances.
                </li>
                <li className="text-color font-fam h5-font">
                  <span className="font-semibold">Power Distribution</span>{" "}
                  Design and implement efficient power distribution systems.
                  Ensure optimal power supply to support the needs of your
                  business operations.
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
                  <img src="assets/images/arab/ele1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele9.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele8.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele10.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/ele4.jpg" alt="" />
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
export default ElectricalServices;
