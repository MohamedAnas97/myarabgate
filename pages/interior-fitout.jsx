import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const ProductDetails = () => {
  const accordionData = [
    {
      id: 1,
      title: "What types of spaces do you specialize in renovating?",
      content:
        "We specialize in renovating various types of spaces, including residential homes, commercial offices, retail stores, restaurants, hotels, and other commercial establishments.",
    },
    {
      id: 2,
      title:
        "How long does a typical interior fit-out or renovation project take?",
      content:
        "The duration of a project depends on its size, complexity, and scope. However, we strive to provide realistic timelines and efficient project management to ensure timely completion.",
    },
    {
      id: 3,
      title:
        "Do you provide design services, or do I need to hire a separate designer?",
      content:
        "We offer comprehensive design services, including conceptualization, space planning, material selection, and 3D visualization. Our team of experienced designers will work closely with you to bring your vision to life.",
    },
    {
      id: 4,
      title:
        "Can I provide input or make changes during the renovation process?",
      content:
        "Absolutely! We welcome your input and encourage open communication to accommodate any changes or adjustments you'd like to make. Your satisfaction is our top priority, and we're here to ensure your vision comes to life.",
    },
    {
      id: 5,
      title:
        "How do you ensure the quality and durability of the materials used in the renovation?",
      content:
        " We source materials from reputable suppliers known for their quality and durability. Additionally, our team conducts thorough inspections throughout the renovation process to ensure that only the highest-quality materials are used, resulting in a finished product that exceeds industry standards.",
    },
    {
      id: 6,
      title:
        "What post-renovation support do you offer?",
      content:
        "Our commitment to your satisfaction doesn't end with the completion of the renovation. We provide post-renovation support to address any additional needs or questions you may have, ensuring that you're completely satisfied with the outcome of your project.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Interior Fit-out and Renovation"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We your space a fresh and modern look with our comprehensive
              interior fit-out solutions. From concept to completion, we handle
              every aspect of the project, ensuring a seamless and efficient
              process . High-quality renovations for kitchens, bathrooms,
              commercial spaces and residences.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              Revitalize and update your existing space with our renovation
              services. Our team is dedicated to delivering high-quality
              renovations that not only enhance the aesthetics but also improve
              functionality and energy efficiency.
            </h5>

            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              We your space a fresh and modern look with our comprehensive
              interior fit-out solutions. From concept to completion, we handle
              every aspect of the project, ensuring a seamless and efficient
              process . High-quality renovations for kitchens, bathrooms,
              commercial spaces and residences.
            </h5>
          </div>
          <div className="about-content wow fadeInUp delay-0-2s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Our Services Includes :
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three pt-15 ">
                <li className="text-color font-fam h5-font">
                  Retail Fit-Outs for Customer Appeal
                </li>
                <li className="text-color font-fam h5-font">
                  Residential Fit-Outs for Comfort
                </li>
                <li className="text-color font-fam h5-font">
                  Kitchen and Bath Renovations
                </li>
                <li className="text-color font-fam h5-font">
                  Gypsum partitions for Offices and Residence
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
                  <img src="assets/images/arab/int1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int8.jpg" alt="" />
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
export default ProductDetails;
