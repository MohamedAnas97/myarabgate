import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const DisplayFixtures = () => {
  const accordionData = [
    {
      id: 1,
      title: "What materials do you use for designing and fabricating display fixtures?",
      content:
        "We work with a variety of materials including paper, sticker, dura-tran, transparent sticker, canvas, banner, fabric, and more. These materials are finished on ideal mounting media such as foam board, forex, acrylic, and MDF to meet the specific requirements of retail product fixtures, events, and exhibitions.",
    },
    {
      id: 2,
      title: "How do your display fixtures enhance retail spaces?",
      content:
        "Our display fixtures are designed to elevate retail spaces by effectively showcasing merchandise. Whether it's gondola displays or wall installations, our expert team ensures that your products are displayed attractively, increasing visibility and driving sales.",
    },
    {
      id: 3,
      title:
        "What sets your gondola and wall display installations apart?",
      content:
        " Our skilled team possesses a keen eye for design and precision, ensuring that every gondola and wall display installation is executed with utmost care and attention to detail. We understand the importance of effectively showcasing merchandise and strive to exceed expectations with our installations.",
    },
    {
      id: 4,
      title: "Can you customize display fixtures according to specific branding requirements?",
      content:
        "Absolutely! We understand the importance of branding in retail environments. Our team works closely with clients to customize display fixtures that align with their brand identity, ensuring consistency and coherence throughout the retail space.",
    },
    {
      id: 5,
      title:
        "How do you ensure the durability and longevity of your display fixtures?",
      content:
        "We prioritize quality and durability in our display fixtures. By using high-quality materials and employing expert fabrication techniques, we ensure that our fixtures are built to withstand the rigors of retail environments and exhibitions, maintaining their appearance and functionality over time.",
    },
    {
      id: 6,
      title: "Do you provide installation services for display fixtures?",
      content:
        "Yes, our services include not only designing and fabricating display fixtures but also professional installation. Our experienced team ensures that the installation process is seamless, minimizing disruption to your retail operations or exhibition setup.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Fixtures for Retail and Exhibitions"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We design & Fabricate on a variety of materials like paper,
              sticker, dura-tran, transparent sticker, canvas, banner, fabric
              etc. and have them finished on the ideal mounting media like foam
              board, forex, acrylic and MDF etc. to fulfill the requirements for
              retail product fixtures, setups for events and exhibitions.
            </h5>
          </div>
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              We specialize in elevating your retail space through expert
              gondola and wall display installations. With a keen eye for design
              and precision, our skilled team ensures your merchandise is
              showcased effectively.
            </h5>
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
                  <img src="assets/images/arab2/f1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/f4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
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
export default DisplayFixtures;
