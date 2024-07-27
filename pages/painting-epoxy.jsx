import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const PaintingEpoxy = () => {
  const accordionData = [
    {
      id: 1,
      title: "What painting and epoxy services do you offer?",
      content:
        "We offer comprehensive painting and epoxy services for residential, commercial, and industrial properties. Our services include interior and exterior painting, epoxy floor coatings, decorative finishes, and more.",
    },
    {
      id: 2,
      title: "How do I choose the right paint colors for my space?",
      content:
        "Our experienced team can provide personalized color consultations to help you choose the perfect paint colors that complement your style, enhance your space, and achieve the desired ambiance.",
    },
    {
      id: 3,
      title: "What are the benefits of epoxy floor coatings?",
      content:
        "Epoxy floor coatings provide a durable, seamless, and easy-to-clean surface that is resistant to stains, chemicals, and abrasions. They are ideal for high-traffic areas such as garages, warehouses, commercial kitchens, and industrial facilities.",
    },
    {
      id: 4,
      title:
        "	Do you offer eco-friendly painting options?",
      content:
        "Yes, we offer eco-friendly paint options that are low in volatile organic compounds (VOCs) and environmentally friendly. These paints are safer for indoor air quality and reduce environmental impact.",
    },
    {
      id: 5,
      title:
        "How long does it take to complete a painting or epoxy project?",
      content:
        "The duration of a painting or epoxy project depends on factors such as the size of the area, surface preparation required, and weather conditions. Our team will provide you with a detailed timeline and keep you informed throughout the process.",
    },
    {
      id: 6,
      title:
        "Can you work around my schedule to minimize disruption?",
      content:
        " Absolutely! We understand the importance of minimizing disruption to your daily routine or business operations. Our team can work during off-hours, weekends, or times that are most convenient for you to ensure a smooth and efficient painting or epoxy installation process.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={" Painting and Epoxy"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We understand the importance of a smoothly functioning plumbing
              system in both residential and commercial spaces.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 rmt-20 text-color font-fam h5-font">
              Our team of skilled professionals is committed to enhancing
              aesthetics, providing durability and ensuring your satisfaction
              with every stroke of the brush and layer of epoxy.
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
                  <img src="assets/images/arab/pnt4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/pnt8.jpg" alt="" />
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
                <div className="section-title mb-60">
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
export default PaintingEpoxy;
