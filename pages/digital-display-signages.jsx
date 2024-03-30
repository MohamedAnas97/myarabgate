import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const DigitalDisplay = () => {
  const accordionData = [
    {
      id: 1,
      title: " What types of digital displays do you offer for businesses?",
      content:
        "We offer a wide range of digital displays customized for various business needs, including indoor displays, outdoor displays, and interactive screens for schools and businesses.",
    },
    {
      id: 2,
      title: "Can you tell us more about your indoor LED display solutions?",
      content:
        "Our indoor LED displays are sourced from top industry providers, offering vibrant full-color displays ideal for information displays, in-store marketing, and other applications to engage customers and create impact in busy consumer environments.",
    },
    {
      id: 3,
      title:
        "What makes your outdoor LED screens suitable for extreme climate conditions?",
      content:
        "Our outdoor LED screens are specifically built to withstand the extreme climate conditions of the GCC region, providing perfect viewing solutions for large areas and arenas, including stadiums, concerts, and live shows.",
    },
    {
      id: 4,
      title: "How do interactive screens benefit schools and businesses?",
      content:
        "Interactive screens enhance engagement and efficiency in classrooms and workplaces. We partner with global solutions providers to offer products tailored for schools, universities, and businesses, facilitating smarter, quicker-paced environments.",
    },
    {
      id: 5,
      title:
        "What digital signage software do you provide?",
      content:
        "We partner with leading global solutions providers to offer digital signage software designed for schools, universities, businesses, and other progressive organizations across the UAE. Our software solutions enhance communication, engagement, and efficiency in various environments.",
    },
    {
      id: 6,
      title: "How can businesses benefit from your digital display and signage services?",
      content:
        "Our digital display and signage solutions help businesses captivate audiences, enhance brand visibility, and communicate messages effectively. Whether it's for marketing, information dissemination, or enhancing customer experiences, our solutions are tailored to meet diverse business needs.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Digital Display & Signages"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We can install any type of digital displays customized for your
              business needs. We have partnered with the best in the industry to
              provide you with displays with high refresh rates, high pixels to
              fine pixel pitch and longer LED lifetimes.
            </h5>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">Indoor Displays</h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Our full-color indoor LED solutions are sources from the best
                  to display vibrant content that is guaranteed to turn heads.
                </li>
                <li className="text-color font-fam h5-font">
                  Our solutions include information displays, pylons, large
                  in-store marketing displays and more, all which help to engage
                  customer interest, sell and create an impact in today’s busy
                  consumer environments.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">Outdoor Displays</h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Built to withstand extreme climate conditions of GCC, our
                  outdoor LED screens provide the perfect viewing solutions for
                  large areas and arenas.
                </li>
                <li className="text-color font-fam h5-font">
                  Captivate the electrifying energy of a stadium on large
                  multi-screens or provide high-definition displays to infuse
                  life into live concerts and shows.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Interactive Screens for Schools and Business
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Classrooms and workplaces are getting smarter, quicker-paced
                  and more efficient.
                </li>
                <li className="text-color font-fam h5-font">
                  We have partnered with top-notch global solutions providers to
                  design products for schools, universities and other education
                  providers, as well as for other progressive businesses across
                  the UAE.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Digital Signage Software
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Classrooms and workplaces are getting smarter, quicker-paced
                  and more efficient.
                </li>
                <li className="text-color font-fam h5-font">
                  We have partnered with top-notch global solutions providers to
                  design products for schools, universities and other education
                  providers, as well as for other progressive businesses across
                  the UAE.
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
                  <img src="assets/images/arab2/sig1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig8.jpg" alt="" />
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
export default DigitalDisplay;
